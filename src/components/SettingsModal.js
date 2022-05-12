import React from 'react';
import Modal from 'react-modal';
import RadioButton from '../components/RadioButton';
import styles from '../styles/modal.module.scss';

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
    <div>
      <button onClick={openModal} className="material-icons" id={styles.settings}>settings</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Settings"
        className={styles.content}
        overlayClassName={styles.overlay}
      >
        <h2>Settings</h2>
        <section>
            <h3>Engines</h3>
            <p>Dogify runs on OpenAI's API and you may choose your engine:</p>
            <RadioButton engine='text-curie-001' description="Curie: very capable, faster than DaVinci" selectedEngine={selectedEngine} onRadioChange={onRadioChange} />
            <RadioButton engine='text-davinci-002' description="DaVinci: most capable" selectedEngine={selectedEngine} onRadioChange={onRadioChange} />
            <RadioButton engine='text-babbage-001' description="Babbage: capable of straightforward tasks, very fast" selectedEngine={selectedEngine} onRadioChange={onRadioChange} />
            <RadioButton engine='text-ada-001' description="Ada: capable of simple tasks, usually the fastest" selectedEngine={selectedEngine} onRadioChange={onRadioChange} />
        </section>
        <button onClick={closeModal} id={styles.select} >select</button>
      </Modal>
    </div>
  );

}

export default SettingsModal;