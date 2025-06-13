document.addEventListener,'DOMContentLoaded' , () => {
    const loadDataBtn = document.getElementById('load-data-btn');
    const dataList = document.getElementById('data-list');

    loadDataBtn.addEventListener('click', async () => {
        dataList.innerHTML = 'Loading data...';
        try {
            const response = await fetch('/api/data');
            const data = await response.json();
            dataList.innerHTML = ''; // Clear loading message
            if (data && data.items && data.items.length > 0) {
                data.items.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = `Item ID: ${item.id}, Name: ${item.name}`;
                    dataList.appendChild(li);
                });
            } else {
                dataList.innerHTML = 'No data available/';
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            dataList.innerHTML = 'Failed to load data.';
        }
    });
});