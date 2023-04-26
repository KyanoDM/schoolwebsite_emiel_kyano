// Function to fetch the JSON data from the provided file
async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  }

  // Function to create the table rows for the "tweedegraad" and "derdegraad" objects
  function createRows(data, target) {
    const table = document.querySelector(target);
    const rows = data.map((item) => {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.textContent = item.naam;
      cell.addEventListener('mouseover', () => {
        highlightDerdegraad(data, item);
        cell.classList.add('highlight');
      });
      cell.addEventListener('mouseout', () => {
        highlightDerdegraad(data, item);
        cell.classList.remove('highlight');
      });
      row.appendChild(cell);
      return row;
    });
    table.append(...rows);
  }

  // Function to highlight the corresponding "doorstroom" value in the "derdegraad" column
  function highlightDerdegraad(data, tweedegraadItem) {
    const derdegraadTable = document.querySelector('#derdegraad');
    derdegraadTable.querySelectorAll('td').forEach((cell) => {
      cell.classList.remove('highlight');
      if (cell.textContent === tweedegraadItem.doorstroom) {
        cell.classList.add('highlight');
      }
      if (cell.textContent === tweedegraadItem.doorstroom2) {
        cell.classList.add('highlight');
      }
    });
  }

  // Main function to initialize the page and fetch the data
  async function init() {
    const data = await fetchData();
    createRows(data.tweedegraad, '#tweedegraad');
    createRows(data.derdegraad, '#derdegraad');
  }

  // Call the main function when the page has finished loading
  window.addEventListener('load', init);