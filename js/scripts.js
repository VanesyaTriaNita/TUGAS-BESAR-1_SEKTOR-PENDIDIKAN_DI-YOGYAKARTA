// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// Data Daerah
const daerahLabels1 = ['kulon progo', 'bantul', 'gunung kidul', 'sleman', 'kota Yogyakarta'];

// BAR CHART - Jumlah Guru
const barChartGuru1Options = {
  series: [{
    name: 'Jumlah Guru',
    data: [160, 523, 164, 550, 259],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartGuru1 = new ApexCharts(document.querySelector('#bar-chart-guru1'), barChartGuru1Options);
barChartGuru1.render();

// BAR CHART - Jumlah Siswa
const barChartSiswa1Options = {
  series: [{
    name: 'Jumlah Siswa',
    data: [1623, 5312, 1502, 5828, 2605],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartSiswa1 = new ApexCharts(document.querySelector('#bar-chart-siswa1'), barChartSiswa1Options);
barChartSiswa1.render();

// BAR CHART - Jumlah Sekolah
const barChartSekolah1Options = {
  series: [{
    name: 'Jumlah Sekolah',
    data: [7, 16, 10, 20, 6],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartSekolah1 = new ApexCharts(document.querySelector('#bar-chart-sekolah1'), barChartSekolah1Options);
barChartSekolah1.render();



// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Jumlah Siswa',
      data: [1623, 5312, 1502, 5828, 2605],
    },
    {
      name: 'Jumlah Sekolah',
        data: [7, 16, 10, 20, 6],
    },
    {
      name: 'Jumlah Guru',
      data: [160, 523, 164, 550, 259],
    },
  ],
  chart: {
    height: 500,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#f5b74f','#367952','#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['kulon progo', 'bantul', 'gunung kidul', 'sleman', 'kota Yogyakarta'],
  markers: {
    size: 2,
  },
  yaxis: [
    {
      title: {
        text: 'Jumlah Siswa',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Jumlah Guru',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

// Data Daerah
const daerahLabels = ['kulon progo', 'bantul', 'gunung kidul', 'sleman', 'kota Yogyakarta'];

// PIE CHART - Jumlah Guru
const pieChartGuruOptions = {
  series:  [160, 523, 164, 550, 259],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Guru'
  }
};

const pieChartGuru = new ApexCharts(
  document.querySelector('#pie-chart-guru'),
  pieChartGuruOptions
);
pieChartGuru.render();

// PIE CHART - Jumlah Siswa
const pieChartSiswaOptions = {
  series: [1623, 5312, 1502, 5828, 2605],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Siswa'
  }
};

const pieChartSiswa = new ApexCharts(
  document.querySelector('#pie-chart-Siswa'),
  pieChartSiswaOptions
);
pieChartSiswa.render();


// PIE CHART - Jumlah Sekolah
const pieChartSekolahOptions = {
  series: [7, 16, 10, 20, 6],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Sekolah'
  }
};

const pieChartSekolah = new ApexCharts(
  document.querySelector('#pie-chart-sekolah'),
  pieChartSekolahOptions
);
pieChartSekolah.render();





