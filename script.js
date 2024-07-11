// Initialize variables
let count = 0;
let highestCount = 0;
let savedData = [];

// Load data from local storage when the window loads
window.onload = () =>
{
  loadFromLocalStorage();
  updateCount();
};

// Update the count display and highest count
function updateCount()
{
  const countDisplay = document.getElementById('count');
  countDisplay.textContent = count;
  document.getElementById('highest-count').textContent = `Highest Count: ${highestCount}`;
}

// Increase the count
function increase()
{
  count++;
  if (count > highestCount)
  {
    highestCount = count;
  }
  updateCount();
}

// Reset the count to zero
function reset()
{
  count = 0;
  updateCount();
}

// Decrease the count, ensuring it doesn't go below zero
function decrease()
{
  if (count > 0)
  {
    count--;
  }
  updateCount();
}

// Save the current count to local storage
function saveData()
{
  const userName = prompt('Enter your name:');
  const description = prompt('Enter a description (optional):');
  const date = new Date().toLocaleString();

  savedData.push({ userName, description, date, count });
  localStorage.setItem('savedData', JSON.stringify(savedData));
  localStorage.setItem('highestCount', highestCount);

  alert('Data saved successfully!');
}

// Show the saved data in an alert box
function showSavedData()
{
  let dataToShow = '';
  savedData.forEach((data, index) =>
  {
    dataToShow += `Entry ${index + 1}: \n`;
    dataToShow += `Name: ${data.userName}\n`;
    dataToShow += `Description: ${data.description || 'No description provided'}\n`;
    dataToShow += `Date: ${data.date}\n`;
    dataToShow += `Count: ${data.count}\n\n`;
  });

  alert(dataToShow || 'No saved data found.');
}

// Clear all saved data from local storage
function clearSavedData()
{
  if (confirm('Are you sure you want to clear all saved data?'))
  {
    savedData = [];
    localStorage.removeItem('savedData');
    localStorage.removeItem('highestCount');
    alert('All data cleared successfully!');
  }
}

// Load saved data from local storage
function loadFromLocalStorage()
{
  const savedDataFromStorage = localStorage.getItem('savedData');
  if (savedDataFromStorage)
  {
    savedData = JSON.parse(savedDataFromStorage);
  }

  const highestCountFromStorage = localStorage.getItem('highestCount');
  if (highestCountFromStorage)
  {
    highestCount = parseInt(highestCountFromStorage);
  }
}
