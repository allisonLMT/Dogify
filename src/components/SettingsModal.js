import React from 'react';
import Modal from 'react-modal';
import DropDown from '../components/DropDown';
import styles from '../styles/modal.module.scss';

Modal.setAppElement('#root');

function SettingsModal({ onDropDownChange }) {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="material-icons">settings</button>
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
            <p>Dogify runs on OpenAI's API and there are four engines that can be used to create your story. Below are the differences.</p>
            <ul>
                <li>Curie: very capable, faster than DaVinci</li>
                <li>DaVinci: most capable</li>
                <li>Babbage: capable of straightforward tasks, very fast</li>
                <li>Ada: capable of simple tasks, usually the fastest</li>
            </ul>
            <p>By default, Dogify runs on Curie but you may change it if you wish.</p>
            <DropDown onDropDownChange={onDropDownChange}/>
        </section>
        <button onClick={closeModal} id={styles.close} >close</button>
      </Modal>
    </div>
  );

}

export default SettingsModal;