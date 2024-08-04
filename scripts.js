document.getElementById('generateActivity').addEventListener('click', function() {
    fetch('findingone')
        .then(response => response.json())
        .then(data => {
            const activity = data.activity;
            document.getElementById('activityDisplay').textContent = activity;
        })
        .catch(error => {
            document.getElementById('activityDisplay').textContent = 'Error fetching activity. Please try again later.';
        });
});
