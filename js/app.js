/**
 * 메인 애플리케이션 스크립트 (js/app.js)
 */

import { TRIP_META, ITINERARY_DAYS, GOURMET_RESTAURANTS, TRANSIT_GUIDE, CHECKLIST_ITEMS } from './data.js';
import BudgetCalculator from './calculator.js';

class OsakaTripApp {
  constructor() {
    this.currentDay = 1;
    this.checklist = JSON.parse(localStorage.getItem('osaka_trip_checklist')) || [...CHECKLIST_ITEMS];
    this.calculator = null;
    
    this.init();
  }

  init() {
    this.initDDayCounter();
    this.renderDayTabs();
    this.renderItinerary(this.currentDay);
    this.renderGourmetSection();
    this.renderTransitSection();
    this.renderChecklist();
    this.initBudgetCalculator();
    this.bindGlobalEvents();
    this.initLucideIcons();
  }

  initLucideIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // 1. D-Day 카운트다운 타이머
  initDDayCounter() {
    const ddayEl = document.getElementById('dday-display');
    const ddayDetailedEl = document.getElementById('dday-detailed-timer');
    if (!ddayEl) return;

    const updateTimer = () => {
      const target = new Date(TRIP_META.startDate).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        ddayEl.innerHTML = `<span class="text-emerald-400 font-extrabold animate-pulse">✈️ 여행 진행 중!</span>`;
        if (ddayDetailedEl) ddayDetailedEl.textContent = "2026 오사카·교토 여행이 시작되었습니다!";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      ddayEl.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="text-xs uppercase tracking-widest text-pink-400 font-semibold">D-Day</span>
          <span class="text-2xl md:text-3xl font-black bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">D-${days}</span>
        </div>
      `;

      if (ddayDetailedEl) {
        ddayDetailedEl.innerHTML = `
          <div class="grid grid-cols-4 gap-2 text-center">
            <div class="bg-slate-900/80 border border-slate-800 rounded-lg p-2">
              <div class="text-xl md:text-2xl font-black text-pink-400">${days}</div>
              <div class="text-[10px] text-slate-400 uppercase">Days</div>
            </div>
            <div class="bg-slate-900/80 border border-slate-800 rounded-lg p-2">
              <div class="text-xl md:text-2xl font-black text-rose-400">${hours}</div>
              <div class="text-[10px] text-slate-400 uppercase">Hours</div>
            </div>
            <div class="bg-slate-900/80 border border-slate-800 rounded-lg p-2">
              <div class="text-xl md:text-2xl font-black text-amber-400">${minutes}</div>
              <div class="text-[10px] text-slate-400 uppercase">Mins</div>
            </div>
            <div class="bg-slate-900/80 border border-slate-800 rounded-lg p-2">
              <div class="text-xl md:text-2xl font-black text-cyan-400">${seconds}</div>
              <div class="text-[10px] text-slate-400 uppercase">Secs</div>
            </div>
          </div>
        `;
      }
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // 2. 일자별 탭 및 일정표
  renderDayTabs() {
    const tabsContainer = document.getElementById('itinerary-day-tabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = ITINERARY_DAYS.map(dayInfo => `
      <button 
        class="day-tab-btn px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
          this.currentDay === dayInfo.day 
            ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg shadow-pink-500/25 ring-2 ring-pink-400/50' 
            : 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
        }"
        data-day="${dayInfo.day}"
      >
        <span class="w-6 h-6 rounded-lg ${this.currentDay === dayInfo.day ? 'bg-white/20' : 'bg-slate-800'} flex items-center justify-center text-xs font-bold">
          ${dayInfo.day}
        </span>
        <span class="font-semibold">${dayInfo.date.split(' ')[0]}</span>
        <span class="text-xs opacity-80 hidden md:inline">(${dayInfo.date.split(' ')[1]})</span>
      </button>
    `).join('') + `
      <button 
        class="day-tab-btn px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
          this.currentDay === 'all' 
            ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 ring-2 ring-cyan-400/50' 
            : 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
        }"
        data-day="all"
      >
        <i data-lucide="layers" class="w-4 h-4"></i>
        <span>전체 일정 보기</span>
      </button>
    `;

    tabsContainer.querySelectorAll('.day-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetDay = btn.dataset.day === 'all' ? 'all' : parseInt(btn.dataset.day);
        this.currentDay = targetDay;
        this.renderDayTabs();
        this.renderItinerary(this.currentDay);
        this.initLucideIcons();
      });
    });
  }

  renderItinerary(day) {
    const container = document.getElementById('itinerary-content-area');
    if (!container) return;

    if (day === 'all') {
      container.innerHTML = `
        <div class="space-y-12">
          ${ITINERARY_DAYS.map(dayInfo => this.buildDayCard(dayInfo)).join('')}
        </div>
      `;
    } else {
      const dayInfo = ITINERARY_DAYS.find(d => d.day === day);
      if (dayInfo) {
        container.innerHTML = this.buildDayCard(dayInfo);
      }
    }
  }

  buildDayCard(dayInfo) {
    const categoryColors = {
      transit: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", icon: "train" },
      food: { bg: "bg-rose-500/10", border: "border-rose-500/30", text: "text-rose-400", icon: "utensils" },
      sightseeing: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", icon: "camera" },
      shopping: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", icon: "shopping-bag" },
      hotel: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", icon: "hotel" },
      "theme-park": { bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/30", text: "text-fuchsia-400", icon: "sparkles" }
    };

    return `
      <div class="glass-card rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden mb-8 border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl">
        <!-- Top Day Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-400 border border-pink-500/30">
                Day ${dayInfo.day}
              </span>
              <span class="text-sm font-semibold text-slate-400">${dayInfo.date}</span>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-white mt-2">${dayInfo.title}</h3>
            <p class="text-sm text-slate-400 mt-1">${dayInfo.summary}</p>
          </div>

          <!-- Highlight Badges -->
          <div class="flex flex-wrap gap-2">
            ${dayInfo.highlights.map(h => `
              <span class="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
                ✨ ${h}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Tips Alert Box -->
        ${dayInfo.tips && dayInfo.tips.length > 0 ? `
          <div class="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex gap-3 text-amber-200/90 text-sm">
            <i data-lucide="lightbulb" class="w-5 h-5 text-amber-400 shrink-0 mt-0.5"></i>
            <div class="space-y-1">
              ${dayInfo.tips.map(tip => `<div>• ${tip}</div>`).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Timeline Steps -->
        <div class="relative pl-6 md:pl-8 space-y-8 before:content-[''] before:absolute before:left-[11px] md:before:left-[15px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-pink-500 before:via-cyan-500 before:to-indigo-500">
          ${dayInfo.timeline.map((item, idx) => {
            const cat = categoryColors[item.category] || categoryColors.sightseeing;
            return `
              <div class="relative group">
                <!-- Timeline Dot -->
                <div class="absolute -left-[29px] md:-left-[37px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 ${cat.border} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <div class="w-2 h-2 rounded-full ${cat.text} bg-current"></div>
                </div>

                <!-- Timeline Content Card -->
                <div class="bg-slate-950/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 rounded-xl p-4 md:p-5 transition-all duration-200 space-y-2">
                  <div class="flex flex-wrap items-center justify-between gap-2">
                    <div class="flex items-center gap-2">
                      <span class="font-mono text-sm font-bold text-pink-400">${item.time}</span>
                      <span class="px-2 py-0.5 rounded text-[11px] font-semibold ${cat.bg} ${cat.text} border ${cat.border}">
                        ${item.badge || '일정'}
                      </span>
                    </div>

                    ${item.cost ? `
                      <span class="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                        💰 ${item.cost}
                      </span>
                    ` : ''}
                  </div>

                  <h4 class="text-base md:text-lg font-bold text-slate-100">${item.title}</h4>
                  <p class="text-sm text-slate-300 leading-relaxed">${item.desc}</p>

                  ${item.tip ? `
                    <div class="text-xs text-amber-300/80 flex items-center gap-1.5 pt-1">
                      <i data-lucide="info" class="w-3.5 h-3.5"></i>
                      <span>${item.tip}</span>
                    </div>
                  ` : ''}

                  <!-- Actions / Links -->
                  <div class="pt-2 flex flex-wrap gap-2">
                    ${item.mapUrl ? `
                      <a href="${item.mapUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-800/50 px-3 py-1.5 rounded-lg transition-colors">
                        <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                        <span>구글 지도에서 위치 보기</span>
                      </a>
                    ` : ''}

                    ${item.restaurantId ? `
                      <button onclick="window.osakaApp.showRestaurantDetail('${item.restaurantId}')" class="inline-flex items-center gap-1.5 text-xs font-medium text-rose-400 hover:text-rose-300 bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800/50 px-3 py-1.5 rounded-lg transition-colors">
                        <i data-lucide="utensils" class="w-3.5 h-3.5"></i>
                        <span>맛집 상세 & 예약 정보</span>
                      </button>
                    ` : ''}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // 3. 미식 & 맛집 섹션
  renderGourmetSection() {
    const container = document.getElementById('gourmet-cards-grid');
    if (!container) return;

    container.innerHTML = GOURMET_RESTAURANTS.map(res => `
      <div class="glass-card rounded-2xl p-6 border border-slate-800/80 bg-slate-900/60 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between group">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-pink-500/10 text-pink-400 border border-pink-500/20">
              ${res.mealType}
            </span>
            <div class="flex items-center gap-1 text-amber-400 font-bold text-xs">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              <span>${res.rating}</span>
              <span class="text-slate-500 font-normal">(${res.reviewsCount})</span>
            </div>
          </div>

          <div>
            <h4 class="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">${res.name}</h4>
            <p class="text-xs text-slate-400 mt-0.5 font-japanese">${res.japaneseName}</p>
          </div>

          <div class="space-y-1.5 text-xs">
            <div class="text-slate-300 flex items-center gap-2">
              <span class="text-slate-500">종류:</span>
              <span class="font-medium text-slate-200">${res.category}</span>
            </div>
            <div class="text-slate-300 flex items-center gap-2">
              <span class="text-slate-500">예산:</span>
              <span class="font-mono text-emerald-400 font-semibold">${res.priceRange}</span>
            </div>
            <div class="text-slate-300 flex items-center gap-2">
              <span class="text-slate-500">예약:</span>
              <span class="font-medium ${res.reservationRequired.includes('필수') ? 'text-rose-400 font-bold' : 'text-slate-300'}">${res.reservationRequired}</span>
            </div>
          </div>

          <p class="text-xs text-slate-400 leading-relaxed line-clamp-3">${res.description}</p>

          <div class="flex flex-wrap gap-1.5 pt-1">
            ${res.specialties.map(spec => `
              <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300 border border-slate-700">
                🥢 ${spec}
              </span>
            `).join('')}
          </div>
        </div>

        <div class="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <a href="${res.googleMapUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
            <span>구글 지도</span>
          </a>

          ${res.reservationUrl ? `
            <a href="${res.reservationUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-500 text-white flex items-center gap-1 shadow-md shadow-pink-500/20">
              <i data-lucide="calendar-check" class="w-3.5 h-3.5"></i>
              <span>예약 링크</span>
            </a>
          ` : `
            <span class="text-[11px] text-slate-500 italic">현장 방문</span>
          `}
        </div>
      </div>
    `).join('');
  }

  showRestaurantDetail(id) {
    const res = GOURMET_RESTAURANTS.find(r => r.id === id);
    if (!res) return;

    const modalContainer = document.getElementById('restaurant-modal');
    const modalContent = document.getElementById('restaurant-modal-content');
    if (!modalContainer || !modalContent) return;

    modalContent.innerHTML = `
      <div class="space-y-6">
        <div class="flex justify-between items-start">
          <div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-pink-500/20 text-pink-400 border border-pink-500/30">
              ${res.mealType} · Day ${res.day}
            </span>
            <h3 class="text-2xl font-bold text-white mt-2">${res.name}</h3>
            <p class="text-sm text-slate-400 font-japanese">${res.japaneseName}</p>
          </div>
          <button onclick="window.osakaApp.closeRestaurantModal()" class="text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800 hover:bg-slate-700">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div class="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
            <span class="text-xs text-slate-400 block">구글 평점</span>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-xl font-black text-amber-400">★ ${res.rating}</span>
              <span class="text-xs text-slate-400">(${res.reviewsCount} 리뷰)</span>
            </div>
          </div>
          <div class="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
            <span class="text-xs text-slate-400 block">예상 1인 예산</span>
            <span class="text-lg font-mono font-bold text-emerald-400 mt-1 block">${res.priceRange}</span>
          </div>
        </div>

        <div class="space-y-3">
          <h4 class="text-sm font-bold text-slate-200">식당 소개 & 매력 포인트</h4>
          <p class="text-sm text-slate-300 leading-relaxed">${res.description}</p>
        </div>

        <div class="space-y-3">
          <h4 class="text-sm font-bold text-slate-200">대표 시그니처 메뉴</h4>
          <ul class="space-y-1.5 text-sm text-slate-300">
            ${res.specialties.map(s => `<li class="flex items-center gap-2"><span class="text-pink-400">✔</span> ${s}</li>`).join('')}
          </ul>
        </div>

        <div class="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-xs text-amber-200/90 space-y-1">
          <div class="font-bold flex items-center gap-1.5 text-amber-300">
            <i data-lucide="sparkles" class="w-4 h-4"></i>
            <span>방문 & 예약 꿀팁</span>
          </div>
          <p>${res.proTip}</p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 pt-2">
          <a href="${res.googleMapUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 py-3 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-700/60 text-cyan-300 font-semibold text-center flex items-center justify-center gap-2">
            <i data-lucide="map-pin" class="w-4 h-4"></i>
            <span>구글 지도 열기</span>
          </a>
          ${res.reservationUrl ? `
            <a href="${res.reservationUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25">
              <i data-lucide="calendar" class="w-4 h-4"></i>
              <span>온라인 예약 페이지로 이동</span>
            </a>
          ` : ''}
        </div>
      </div>
    `;

    modalContainer.classList.remove('hidden');
    modalContainer.classList.add('flex');
    this.initLucideIcons();
  }

  closeRestaurantModal() {
    const modalContainer = document.getElementById('restaurant-modal');
    if (modalContainer) {
      modalContainer.classList.add('hidden');
      modalContainer.classList.remove('flex');
    }
  }

  // 4. 교통 & 패스 섹션
  renderTransitSection() {
    const container = document.getElementById('transit-guide-container');
    if (!container) return;

    container.innerHTML = TRANSIT_GUIDE.map(item => `
      <div class="glass-card rounded-2xl p-6 border border-slate-800/80 bg-slate-900/60 space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <i data-lucide="${item.icon}" class="w-5 h-5"></i>
            </div>
            <div>
              <span class="text-xs font-semibold text-cyan-400">${item.type}</span>
              <h4 class="text-lg font-bold text-white">${item.title}</h4>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div class="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
            <span class="text-slate-400 block">소요 시간</span>
            <span class="font-bold text-slate-200 mt-0.5 block">${item.duration}</span>
          </div>
          <div class="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
            <span class="text-slate-400 block">예상 요금</span>
            <span class="font-mono font-bold text-emerald-400 mt-0.5 block">${item.price}</span>
          </div>
        </div>

        <div class="text-xs text-slate-300 bg-slate-950/40 p-3 rounded-lg border border-slate-800/60">
          <span class="font-semibold text-slate-400 block mb-1">📍 주요 경로:</span>
          <span class="font-mono text-cyan-300">${item.route}</span>
        </div>

        <div class="space-y-1.5 text-xs text-slate-300">
          <span class="font-bold text-slate-200 block mb-1">💡 이용 꿀팁:</span>
          ${item.tips.map(t => `<div class="flex items-start gap-2"><span class="text-pink-400">•</span><span>${t}</span></div>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // 5. 체크리스트 섹션
  renderChecklist() {
    const container = document.getElementById('checklist-items-container');
    const progressText = document.getElementById('checklist-progress-text');
    const progressBar = document.getElementById('checklist-progress-bar');
    if (!container) return;

    const total = this.checklist.length;
    const checkedCount = this.checklist.filter(c => c.checked).length;
    const percentage = total > 0 ? Math.round((checkedCount / total) * 100) : 0;

    if (progressText) progressText.textContent = `${checkedCount} / ${total} 완료 (${percentage}%)`;
    if (progressBar) progressBar.style.width = `${percentage}%`;

    // Group by category
    const categories = [...new Set(this.checklist.map(i => i.category))];

    container.innerHTML = categories.map(cat => {
      const catItems = this.checklist.filter(i => i.category === cat);
      return `
        <div class="space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-pink-400 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-pink-400"></span>
            ${cat}
          </h4>
          <div class="space-y-2">
            ${catItems.map(item => `
              <label class="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 cursor-pointer transition-all duration-200 group">
                <input 
                  type="checkbox" 
                  data-chk-id="${item.id}"
                  ${item.checked ? 'checked' : ''}
                  class="chk-toggle w-4 h-4 rounded text-pink-500 bg-slate-950 border-slate-700 focus:ring-pink-500 focus:ring-offset-slate-900"
                />
                <span class="text-sm ${item.checked ? 'line-through text-slate-500' : 'text-slate-200 group-hover:text-white'} transition-colors">
                  ${item.text}
                </span>
              </label>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.chk-toggle').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const id = e.target.dataset.chkId;
        const item = this.checklist.find(i => i.id === id);
        if (item) {
          item.checked = e.target.checked;
          localStorage.setItem('osaka_trip_checklist', JSON.stringify(this.checklist));
          this.renderChecklist();
        }
      });
    });
  }

  initBudgetCalculator() {
    this.calculator = new BudgetCalculator();
  }

  bindGlobalEvents() {
    // Modal background close
    const modal = document.getElementById('restaurant-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeRestaurantModal();
        }
      });
    }

    // Reset checklist button
    const resetChkBtn = document.getElementById('checklist-reset-btn');
    if (resetChkBtn) {
      resetChkBtn.addEventListener('click', () => {
        if (confirm("체크리스트 상태를 초기화하시겠습니까?")) {
          this.checklist = JSON.parse(JSON.stringify(CHECKLIST_ITEMS));
          localStorage.removeItem('osaka_trip_checklist');
          this.renderChecklist();
        }
      });
    }

    // Mobile nav toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu-drawer');
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.osakaApp = new OsakaTripApp();
});
