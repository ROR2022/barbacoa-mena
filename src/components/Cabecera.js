import React, {useEffect,useState} from 'react'
import '../styles/cabecera.css'

const Cabecera = () => {
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }
  return (
    <div className='cab-cont'>
                <h1 className='titulo'>Alejandro Mena Rivera</h1>
                <h2 className="subtitulo">La mejor Barbacoa de Puerco</h2>
                <h3 className="horario">Lun-Dom 5:30pm-10:30pm</h3>
                {isReadyForInstall && (
                  <button onClick={downloadApp}> Descargar </button>
                  )}
    </div>
  )
}

export default Cabecera