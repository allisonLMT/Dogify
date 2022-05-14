import React, { Fragment }from 'react';
import Modal from 'react-modal';
import RadioButton from '../components/RadioButton';
import styles from '../styles/settingsModal.module.scss';

Modal.setAppElement('#root');

function SettingsModal({ selectedEngine, onRadioChange }) {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
        <button 
            onClick={openModal} 
            className="material-icons" 
            id={styles.settings}>
                settings
        </button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Settings"
            className={styles.content}
            overlayClassName={styles.overlay}
        >
        <section>
            <h2>Settings</h2>
            <h3>Engines</h3>
            <p>Dogify runs on <a href="https://openai.com/api/">OpenAI's API</a> and you may choose your engine:</p>
            <RadioButton 
                engine='text-curie-001' 
                engineName="Curie:" 
                description=" very capable, faster than DaVinci" 
                selectedEngine={selectedEngine} 
                onRadioChange={onRadioChange} />
            <RadioButton 
                engine='text-davinci-002' 
                engineName="DaVinci:" 
                description=" most capable" 
                selectedEngine={selectedEngine} 
                onRadioChange={onRadioChange} />
            <RadioButton 
                engine='text-babbage-001' 
                engineName="Babbage:" 
                description=" capable of straightforward tasks, very fast" 
                selectedEngine={selectedEngine} 
                onRadioChange={onRadioChange} />
            <RadioButton 
                engine='text-ada-001' 
                engineName="Ada:" 
                description=" capable of simple tasks, usually the fastest" 
                selectedEngine={selectedEngine} 
                onRadioChange={onRadioChange} />
        </section>
        <button onClick={closeModal} id={styles.select} >select</button>
      </Modal>
    </>
  );

}

export default SettingsModal;