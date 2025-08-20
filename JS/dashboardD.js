function toggleSubmenu(el) {
  const submenu = el.nextElementSibling;
  submenu.classList.toggle('open');
}

const demoData = {
  sales: {
    today: { value: 'Bs 0.00', change: '0 ventas completadas hoy', icon: '📈', title: 'Ventas del Día' },
    week:  { value: 'Bs 2,345.70', change: '15 ventas esta semana', icon: '📊', title: 'Ventas de la Semana' },
    month: { value: 'Bs 15,820.55', change: '98 ventas este mes', icon: '💰', title: 'Ventas del Mes' }
  },
  orders: {
    today: { value: '0', change: 'Sin ventas hoy', icon: '🔥', title: 'Órdenes del Día' },
    week:  { value: '15', change: 'Órdenes de esta semana', icon: '📦', title: 'Órdenes de la Semana' },
    month: { value: '98', change: 'Órdenes de este mes', icon: '🚀', title: 'Órdenes del Mes' }
  },
  revenue: {
    today: { value: '+1.8%', change: 'Tendencia positiva', icon: '⭐', title: 'Crecimiento Diario' },
    week:  { value: '+8.3%', change: '+1.2% vs semana anterior', icon: '📈', title: 'Crecimiento Semanal' },
    month: { value: '+12.5%', change: '+3.1% vs mes anterior', icon: '🎯', title: 'Crecimiento Mensual' }
  }
};

function cycleCardData(btn) {
  const type = btn.getAttribute('data-type');
  const current = btn.getAttribute('data-period');
  const next = current === 'today' ? 'week' : (current === 'week' ? 'month' : 'today');
  btn.setAttribute('data-period', next);
  const data = demoData[type][next];
  btn.querySelector('.overview-card-title').textContent = data.title;
  btn.querySelector('.overview-card-value').textContent = data.value;
  btn.querySelector('.overview-card-change').innerHTML = `<span>${data.icon}</span> ${data.change}`;
}