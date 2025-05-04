const data_plan = {
  labels: [
    'ICO',
    'Public',
    'Private',
    'Personal'
  ],
  datasets: [{
    label: 'Future Distribution Plan',
    data: [400000000000, 400000000000, 100000000000, 100000000000],
    backgroundColor: [
      'rgb(0, 0, 255)',
      'rgb(0, 255, 0)',
      'rgb(255, 0, 0)',
      'rgb(0, 0, 0)'
    ],
    hoverOffset: 4
  }]
};

  const config_plan = {
    type: 'doughnut',
    data: data_plan,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Future Distribution Plan'
            }
        }
    }
  };

  const plan = new Chart(
    document.getElementById('plan'),
    config_plan
  );

  const data_experiment = {
  labels: [
    'Ethereum',
    'Arbitrum',
    'Binance Smart Chain',
    'Thunder Core',
    'Avalanche',
    'Polygon',
    'Energi'
  ],
  datasets: [{
    label: 'Current Experiment Distribution',
    data: [1000000000, 100000000000, 100000000000, 200000000000, 100000000000, 100000000000, 100000000000],
    backgroundColor: [
      'rgb(255, 255, 255)',
      'rgb(255, 0, 255)',
      'rgb(255, 125, 0)',
      'rgb(255, 255, 0)',
      'rgb(255, 0, 0)',
      'rgb(0, 0, 165)',
      'rgb(0, 255, 0)'
    ],
    hoverOffset: 4
  }]
};

const config_experiment = {
    type: 'doughnut',
    data: data_experiment,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Current Experiment Distribution'
            }
        }
    }
};

const experiment = new Chart(
  document.getElementById('experiment'),
  config_experiment
);
