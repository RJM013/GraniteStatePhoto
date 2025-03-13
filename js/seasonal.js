/**
 * Seasonal tabs functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // Season Tabs
    const seasonTabs = document.querySelectorAll('.season-tab');
    const seasonInfos = document.querySelectorAll('.season-info');
    
    if (seasonTabs.length > 0 && seasonInfos.length > 0) {
        seasonTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                seasonTabs.forEach(tab => tab.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Hide all season infos
                seasonInfos.forEach(info => info.classList.remove('active'));
                
                // Show the selected season info
                const season = tab.getAttribute('data-season');
                const seasonInfo = document.getElementById(`${season}-info`);
                if (seasonInfo) {
                    seasonInfo.classList.add('active');
                }
            });
        });
    }
});