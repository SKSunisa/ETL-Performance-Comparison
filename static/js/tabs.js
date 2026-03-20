// Tab Navigation Functionality

// Global function to switch tabs - simplified and reliable
function switchTab(targetId) {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to target button and content
    const targetButton = document.querySelector(`[data-tab="${targetId}"]`);
    const targetContent = document.getElementById(targetId);

    if (targetButton && targetContent) {
        targetButton.classList.add('active');
        targetContent.classList.add('active');

        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update URL hash
        if (history.pushState) {
            history.pushState(null, null, `#${targetId}`);
        } else {
            window.location.hash = targetId;
        }
    } else {
        console.error('Target tab not found:', targetId);
    }
}

// Make it globally available
window.switchTab = switchTab;

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Check URL hash on load
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        switchTab(hash);
    } else {
        // Activate first tab by default
        if (tabButtons.length > 0) {
            const firstTabId = tabButtons[0].getAttribute('data-tab');
            switchTab(firstTabId);
        }
    }

    // Handle browser back/forward buttons
    window.addEventListener('hashchange', function() {
        const newHash = window.location.hash.substring(1);
        if (newHash && document.getElementById(newHash)) {
            switchTab(newHash);
        }
    });

    // Keyboard navigation (Arrow keys)
    document.addEventListener('keydown', function(e) {
        const activeButton = document.querySelector('.tab-button.active');
        if (!activeButton) return;

        const currentIndex = Array.from(tabButtons).indexOf(activeButton);
        let newIndex;

        if (e.key === 'ArrowRight') {
            newIndex = (currentIndex + 1) % tabButtons.length;
        } else if (e.key === 'ArrowLeft') {
            newIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
        } else {
            return;
        }

        const newTabId = tabButtons[newIndex].getAttribute('data-tab');
        switchTab(newTabId);
    });
});
