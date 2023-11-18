const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});


butInstall.addEventListener('click', async (event) => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }

    event.preventDefault();
    promptEvent.prompt();
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
