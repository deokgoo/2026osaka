/**
 * 예산 계산기 및 환율 환산 엔진 (js/calculator.js)
 */

import { DEFAULT_BUDGET_ITEMS, TRIP_META } from './data.js';

class BudgetCalculator {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('osaka_trip_budget_items')) || [...DEFAULT_BUDGET_ITEMS];
    this.travelers = parseInt(localStorage.getItem('osaka_trip_travelers')) || 2;
    this.exchangeRate = parseFloat(localStorage.getItem('osaka_trip_rate')) || TRIP_META.defaultExchangeRate;
    
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  setTravelers(count) {
    this.travelers = Math.max(1, count);
    localStorage.setItem('osaka_trip_travelers', this.travelers);
    this.render();
  }

  setExchangeRate(rate) {
    this.exchangeRate = Math.max(0.1, rate);
    localStorage.setItem('osaka_trip_rate', this.exchangeRate);
    this.render();
  }

  resetToDefault() {
    this.items = JSON.parse(JSON.stringify(DEFAULT_BUDGET_ITEMS));
    this.travelers = 2;
    this.exchangeRate = TRIP_META.defaultExchangeRate;
    localStorage.removeItem('osaka_trip_budget_items');
    localStorage.removeItem('osaka_trip_travelers');
    localStorage.removeItem('osaka_trip_rate');
    this.render();
  }

  updateItemCost(id, jpyCost) {
    const item = this.items.find(it => it.id === id);
    if (item) {
      item.costJpy = Math.max(0, parseInt(jpyCost) || 0);
      item.costKrw = Math.round(item.costJpy * this.exchangeRate);
      this.save();
      this.render();
    }
  }

  save() {
    localStorage.setItem('osaka_trip_budget_items', JSON.stringify(this.items));
  }

  calculateTotals() {
    let totalJpy = 0;
    const categoryTotals = {};

    this.items.forEach(item => {
      const multiplier = item.isPerPerson ? this.travelers : 1;
      const itemTotalJpy = item.costJpy * multiplier;
      totalJpy += itemTotalJpy;

      if (!categoryTotals[item.category]) {
        categoryTotals[item.category] = 0;
      }
      categoryTotals[item.category] += itemTotalJpy;
    });

    const totalKrw = Math.round(totalJpy * this.exchangeRate);
    const perPersonJpy = Math.round(totalJpy / this.travelers);
    const perPersonKrw = Math.round(totalKrw / this.travelers);

    return {
      totalJpy,
      totalKrw,
      perPersonJpy,
      perPersonKrw,
      categoryTotals
    };
  }

  formatNumber(num) {
    return new Intl.NumberFormat('ko-KR').format(num);
  }

  render() {
    const travelersInput = document.getElementById('calc-travelers-count');
    const rateInput = document.getElementById('calc-exchange-rate');
    const tableBody = document.getElementById('budget-items-tbody');
    const totalJpyEl = document.getElementById('calc-total-jpy');
    const totalKrwEl = document.getElementById('calc-total-krw');
    const perPersonJpyEl = document.getElementById('calc-per-person-jpy');
    const perPersonKrwEl = document.getElementById('calc-per-person-krw');
    const categoryBarsEl = document.getElementById('calc-category-breakdown');

    if (travelersInput) travelersInput.value = this.travelers;
    if (rateInput) rateInput.value = this.exchangeRate;

    const totals = this.calculateTotals();

    if (totalJpyEl) totalJpyEl.textContent = `¥${this.formatNumber(totals.totalJpy)}`;
    if (totalKrwEl) totalKrwEl.textContent = `약 ₩${this.formatNumber(totals.totalKrw)}`;
    if (perPersonJpyEl) perPersonJpyEl.textContent = `¥${this.formatNumber(totals.perPersonJpy)}`;
    if (perPersonKrwEl) perPersonKrwEl.textContent = `약 ₩${this.formatNumber(totals.perPersonKrw)}`;

    // Render table
    if (tableBody) {
      tableBody.innerHTML = this.items.map(item => {
        const multiplier = item.isPerPerson ? this.travelers : 1;
        const totalItemJpy = item.costJpy * multiplier;
        const totalItemKrw = Math.round(totalItemJpy * this.exchangeRate);

        return `
          <tr class="border-b border-gray-800 hover:bg-white/5 transition-colors">
            <td class="py-3 px-4 text-xs font-semibold text-sky-400">
              <span class="inline-block px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/40">${item.category}</span>
            </td>
            <td class="py-3 px-4 text-sm font-medium text-gray-200">
              ${item.name}
              ${item.isPerPerson ? '<span class="text-xs text-gray-400 ml-1">(1인 기준)</span>' : '<span class="text-xs text-amber-400/80 ml-1">(전체 총액)</span>'}
            </td>
            <td class="py-3 px-4 text-right">
              <div class="inline-flex items-center gap-1">
                <span class="text-xs text-gray-400">¥</span>
                <input type="number" 
                  data-item-id="${item.id}" 
                  value="${item.costJpy}" 
                  class="budget-jpy-input bg-slate-900/80 border border-slate-700 focus:border-cyan-500 rounded px-2 py-1 text-sm text-right w-24 font-mono text-cyan-300 focus:outline-none"
                />
              </div>
            </td>
            <td class="py-3 px-4 text-right font-mono text-sm text-slate-300">
              ¥${this.formatNumber(totalItemJpy)}
            </td>
            <td class="py-3 px-4 text-right font-mono text-sm font-semibold text-emerald-400">
              ₩${this.formatNumber(totalItemKrw)}
            </td>
          </tr>
        `;
      }).join('');
    }

    // Render category visual breakdown
    if (categoryBarsEl) {
      const categories = Object.entries(totals.categoryTotals);
      const colorMap = {
        "항공": "from-sky-500 to-blue-600",
        "숙박": "from-purple-500 to-indigo-600",
        "식비": "from-rose-500 to-amber-500",
        "교통": "from-teal-400 to-emerald-500",
        "관광": "from-fuchsia-500 to-pink-600",
        "쇼핑": "from-amber-400 to-orange-500",
        "기타": "from-gray-500 to-slate-600"
      };

      categoryBarsEl.innerHTML = categories.map(([cat, amount]) => {
        const percent = totals.totalJpy > 0 ? ((amount / totals.totalJpy) * 100).toFixed(1) : 0;
        const grad = colorMap[cat] || "from-gray-500 to-slate-600";
        return `
          <div class="space-y-1">
            <div class="flex justify-between text-xs">
              <span class="font-medium text-slate-300">${cat}</span>
              <span class="font-mono text-slate-400">¥${this.formatNumber(amount)} (${percent}%)</span>
            </div>
            <div class="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r ${grad} rounded-full transition-all duration-500" style="width: ${percent}%"></div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  bindEvents() {
    const travelersInput = document.getElementById('calc-travelers-count');
    const rateInput = document.getElementById('calc-exchange-rate');
    const resetBtn = document.getElementById('calc-reset-btn');
    const tableBody = document.getElementById('budget-items-tbody');

    if (travelersInput) {
      travelersInput.addEventListener('change', (e) => {
        this.setTravelers(parseInt(e.target.value) || 1);
      });
    }

    if (rateInput) {
      rateInput.addEventListener('input', (e) => {
        this.setExchangeRate(parseFloat(e.target.value) || 9.15);
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm("예산 계산기 데이터를 초기 기본값으로 리셋하시겠습니까?")) {
          this.resetToDefault();
        }
      });
    }

    if (tableBody) {
      tableBody.addEventListener('change', (e) => {
        if (e.target.classList.contains('budget-jpy-input')) {
          const id = e.target.dataset.itemId;
          this.updateItemCost(id, e.target.value);
        }
      });
    }
  }
}

export default BudgetCalculator;
