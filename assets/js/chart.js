// Wait for DOM to load before running
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('skillsChart');
    
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Web Security', 'Network Sec', 'GRC', 'Scripting', 'Forensics', 'Cloud Sec'],
                datasets: [{
                    label: 'Skill Proficiency',
                    data: [85, 90, 80, 85, 75, 70], // Adjust these values (0-100)
                    backgroundColor: 'rgba(0, 255, 65, 0.2)', // Neon Green fill
                    borderColor: '#00ff41', // Neon Green border
                    borderWidth: 2,
                    pointBackgroundColor: '#00ff41',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#00ff41'
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: { color: '#30363d' }, // Dark grid lines
                        grid: { color: '#30363d' },
                        pointLabels: {
                            color: '#c9d1d9', // Light grey text
                            font: { family: "'Courier New', monospace", size: 12 }
                        },
                        ticks: { display: false, backdropColor: 'transparent' } // Hide numbers
                    }
                },
                plugins: {
                    legend: { display: false } // Hide legend for cleaner look
                },
                maintainAspectRatio: false // Helps with responsiveness
            }
        });
    }
});