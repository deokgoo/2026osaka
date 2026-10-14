// Restaurant Selection Page Logic
// Handles displaying undecided meal slots and restaurant options

import { GOURMET_RESTAURANTS as RESTAURANTS } from './data.js';

// ─── State ────────────────────────────────────────────────────────────────────
let selectedRestaurants = {};  // key: "day-mealType" → restaurant id
let activeFilter = 'all';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getMealSlotKey(day, mealType) {
  const meal = mealType.includes('점심') || mealType.includes('런치') ? 'lunch' : 'dinner';
  return `${day}-${meal}`;
}

function getDayLabel(day) {
  const labels = {
    1: '1일차 (11/1 토)',
    2: '2일차 (11/2 일)',
    3: '3일차 (11/3 월)',
    4: '4일차 (11/4 화)',
    5: '5일차 (11/5 수)'
  };
  return labels[day] || `${day}일차`;
}

function getMealLabel(mealType) {
  if (mealType.includes('점심') || mealType.includes('런치')) return '점심 (런치)';
  if (mealType.includes('저녁') || mealType.includes('디너')) return '저녁 (디너)';
  return mealType;
}

function getMealIcon(mealType) {
  if (mealType.includes('점심') || mealType.includes('런치')) return '🌞';
  if (mealType.includes('저녁') || mealType.includes('디너')) return '🌙';
  return '🍽️';
}

function getMealColor(mealType) {
  if (mealType.includes('점심') || mealType.includes('런치')) return 'text-amber-400';
  if (mealType.includes('저녁') || mealType.includes('디너')) return 'text-pink-400';
  return 'text-slate-400';
}

function getMealBadgeColor(mealType) {
  if (mealType.includes('점심') || mealType.includes('런치')) return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
  if (mealType.includes('저녁') || mealType.includes('디너')) return 'bg-pink-500/20 text-pink-300 border-pink-500/30';
  return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
}

function getMealBadgeIcon(mealType) {
  if (mealType.includes('점심') || mealType.includes('런치')) return 'sun';
  if (mealType.includes('저녁') || mealType.includes('디너')) return 'moon';
  return 'utensils';
}

// ─── Data Processing ──────────────────────────────────────────────────────────

function getUndecidedSlots() {
  const slots = {};
  
  RESTAURANTS.forEach(r => {
    const key = getMealSlotKey(r.day, r.mealType);
    if (!slots[key]) {
      slots[key] = {
        day: r.day,
        mealType: r.mealType,
        restaurantIds: [],
        selectedId: null
      };
    }
    slots[key].restaurantIds.push(r.id);
  });

  // Find which slots have no selection yet
  const undecided = {};
  Object.entries(slots).forEach(([key, slot]) => {
    const isSelected = selectedRestaurants[key] !== undefined;
    if (!isSelected) {
      undecided[key] = slot;
    }
  });

  return undecided;
}

function getSelectedSlots() {
  const selected = {};
  Object.entries(selectedRestaurants).forEach(([key, restaurantId]) => {
    const restaurant = RESTAURANTS.find(r => r.id === restaurantId);
    if (restaurant) {
      selected[key] = {
        day: restaurant.day,
        mealType: restaurant.mealType,
        restaurant: restaurant
      };
    }
  });
  return selected;
}

// ─── Rendering ────────────────────────────────────────────────────────────────

function renderSummary() {
  const container = document.getElementById('summary-slots');
  const selected = getSelectedSlots();
  const undecided = getUndecidedSlots();

  if (Object.keys(selected).length === 0 && Object.keys(undecided).length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-slate-400">
        <i data-lucide="check-circle" class="w-8 h-8 mx-auto mb-2 text-green-400"></i>
        <p>모든 식당이 선택되었습니다!</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  let html = '';

  // Selected items
  Object.entries(selected).forEach(([key, slot]) => {
    const r = slot.restaurant;
    html += `
      <div class="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
        <span class="text-lg">${getMealIcon(r.mealType)}</span>
        <div class="flex-1 min-w-0">
          <p class="text-xs text-slate-400">${getDayLabel(r.day)} · ${getMealLabel(r.mealType)}</p>
          <p class="text-sm font-semibold text-green-300 truncate">${r.name}</p>
        </div>
        <button onclick="deselectRestaurant('${key}')" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;
  });

  // Undecided items
  Object.entries(undecided).forEach(([key, slot]) => {
    html += `
      <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 border-dashed">
        <span class="text-lg">${getMealIcon(slot.mealType)}</span>
        <div class="flex-1 min-w-0">
          <p class="text-xs text-slate-400">${getDayLabel(slot.day)} · ${getMealLabel(slot.mealType)}</p>
          <p class="text-sm text-slate-500">아직 선택 안됨</p>
        </div>
        <span class="px-2 py-0.5 rounded-full bg-slate-700 text-slate-400 text-xs">${slot.restaurantIds.length}개 옵션</span>
      </div>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons();
}

function renderFilterTabs() {
  const container = document.getElementById('filter-tabs');
  const undecided = getUndecidedSlots();
  const days = [...new Set(Object.values(undecided).map(s => s.day))].sort();

  let html = `
    <button onclick="setFilter('all')" class="filter-tab ${activeFilter === 'all' ? 'active' : ''} px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap" data-filter="all">
      <i data-lucide="layers" class="w-4 h-4 inline mr-1.5"></i>전체
    </button>
  `;

  days.forEach(day => {
    const count = Object.values(undecided).filter(s => s.day === day).length;
    html += `
      <button onclick="setFilter('${day}')" class="filter-tab ${activeFilter === String(day) ? 'active' : ''} px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap" data-filter="${day}">
        <i data-lucide="calendar" class="w-4 h-4 inline mr-1.5"></i>${getDayLabel(day)}
        <span class="ml-1.5 px-1.5 py-0.5 rounded-md bg-slate-700 text-slate-400 text-xs">${count}</span>
      </button>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons();
}

function renderRestaurantCards() {
  const container = document.getElementById('restaurant-cards');
  const undecided = getUndecidedSlots();

  // Filter
  let filtered;
  if (activeFilter === 'all') {
    filtered = Object.values(undecided);
  } else {
    const day = parseInt(activeFilter);
    filtered = Object.values(undecided).filter(s => s.day === day);
  }

  // Group by day
  const grouped = {};
  filtered.forEach(slot => {
    if (!grouped[slot.day]) grouped[slot.day] = [];
    grouped[slot.day].push(slot);
  });

  if (Object.keys(grouped).length === 0) {
    container.innerHTML = `
      <div class="text-center py-16">
        <i data-lucide="check-circle-2" class="w-16 h-16 mx-auto mb-4 text-green-400"></i>
        <h3 class="text-xl font-bold text-slate-300 mb-2">모든 식당이 선택되었습니다!</h3>
        <p class="text-slate-400">선택을 변경하려면 하단 요약에서 해제하세요.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  let html = '';

  Object.entries(grouped).sort(([a], [b]) => a - b).forEach(([day, slots]) => {
    html += `
      <div class="space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-pink-500/20">
            ${day}
          </div>
          <h2 class="text-xl font-bold text-white">${getDayLabel(day)}</h2>
          <div class="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></div>
        </div>
    `;

    slots.forEach(slot => {
      const mealColor = getMealColor(slot.mealType);
      const badgeColor = getMealBadgeColor(slot.mealType);
      const mealIcon = getMealBadgeIcon(slot.mealType);

      html += `
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-lg">${getMealIcon(slot.mealType)}</span>
            <span class="px-3 py-1 rounded-lg text-xs font-semibold ${badgeColor} border flex items-center gap-1.5">
              <i data-lucide="${mealIcon}" class="w-3 h-3"></i>
              ${getMealLabel(slot.mealType)}
            </span>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      `;

      // Show all restaurants for this slot
      slot.restaurantIds.forEach(rid => {
        const r = RESTAURANTS.find(rest => rest.id === rid);
        if (!r) return;

        const isSelected = selectedRestaurants[getMealSlotKey(r.day, r.mealType)] === r.id;
        const cardClass = isSelected 
          ? 'ring-2 ring-green-500 bg-green-500/5 border-green-500/30' 
          : 'hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/5';

        html += `
          <div class="restaurant-card ${cardClass} rounded-2xl border border-slate-700/50 p-5 transition-all cursor-pointer group" 
               onclick="selectRestaurant('${r.id}', '${getMealSlotKey(r.day, r.mealType)}')">
            ${isSelected ? `
              <div class="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                <i data-lucide="check" class="w-4 h-4 text-white"></i>
              </div>
            ` : ''}
            
            <div class="flex items-start justify-between gap-3 mb-3">
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">${r.name}</h3>
                <p class="text-xs text-slate-400 mt-0.5">${r.japaneseName}</p>
              </div>
              <span class="px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 border border-slate-700 whitespace-nowrap">${r.category || r.type || '음식점'}</span>
            </div>

            <div class="space-y-2.5 text-sm">
              <div class="flex items-start gap-2 text-slate-300">
                <i data-lucide="map-pin" class="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0"></i>
                <span>${r.address || r.location || '위치 정보 없음'}</span>
              </div>
              <div class="flex items-center gap-2 text-slate-300">
                <i data-lucide="wallet" class="w-4 h-4 text-amber-400 flex-shrink-0"></i>
                <span>${r.priceRange || r.pricePerPerson || '가격 정보 없음'}</span>
              </div>
              <div class="flex items-center gap-2 text-slate-300">
                <i data-lucide="clock" class="w-4 h-4 text-cyan-400 flex-shrink-0"></i>
                <span>${r.waiting || '대기 정보 없음'}</span>
              </div>
            </div>

            <div class="mt-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/50">
              <p class="text-xs text-slate-400 leading-relaxed">${r.recommendation}</p>
            </div>

            ${r.specialties && r.specialties.length > 0 ? `
              <div class="mt-3">
                <p class="text-xs text-slate-500 mb-1.5 font-semibold">추천 메뉴</p>
                <div class="flex flex-wrap gap-1.5">
                  ${r.specialties.map(s => `<span class="px-2 py-0.5 rounded-md bg-slate-800/80 text-xs text-slate-300 border border-slate-700/50">${s}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            ${r.reservationInfo ? `
              <div class="mt-3 flex items-center gap-2 text-xs text-slate-400">
                <i data-lucide="calendar-check" class="w-3.5 h-3.5 text-purple-400"></i>
                <span>${r.reservationInfo.method || (Array.isArray(r.reservationInfo.methods) ? r.reservationInfo.methods.join(' · ') : '예약 정보 없음')}</span>
              </div>
            ` : ''}
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    html += `</div>`;
  });

  container.innerHTML = html;
  lucide.createIcons();
}

// ─── Actions ──────────────────────────────────────────────────────────────────

function selectRestaurant(restaurantId, slotKey) {
  selectedRestaurants[slotKey] = restaurantId;
  localStorage.setItem('osaka-selection', JSON.stringify(selectedRestaurants));
  renderAll();
}

function deselectRestaurant(slotKey) {
  delete selectedRestaurants[slotKey];
  localStorage.setItem('osaka-selection', JSON.stringify(selectedRestaurants));
  renderAll();
}

function setFilter(filter) {
  activeFilter = filter;
  renderAll();
}

function renderAll() {
  renderSummary();
  renderFilterTabs();
  renderRestaurantCards();
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Load saved selections
  const saved = localStorage.getItem('osaka-selection');
  if (saved) {
    try {
      selectedRestaurants = JSON.parse(saved);
    } catch (e) {
      selectedRestaurants = {};
    }
  }

  // Mobile menu
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuDrawer = document.getElementById('mobile-menu-drawer');
  if (menuBtn && menuDrawer) {
    menuBtn.addEventListener('click', () => {
      menuDrawer.classList.toggle('hidden');
    });
  }

  renderAll();
});

// Expose to global scope for onclick handlers
window.selectRestaurant = selectRestaurant;
window.deselectRestaurant = deselectRestaurant;
window.setFilter = setFilter;
