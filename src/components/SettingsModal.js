import React from 'react';
import Modal from 'react-modal';
import DropDown from '../components/DropDown';


function SettingsModal({ onDropDownChange }) {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
    //   top: '50%',
    //   left: '50%',
    //   right: 'auto',
    //   bottom: 'auto',
    //   marginRight: '-50%',
    //   transform: 'translate(-50%, -50%)',
    inset: '1rem',
      border: '2px solid red',
    },
  };

  return (
    <div>
      <button onClick={openModal}><i class="material-icons">settings</i></button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
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
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );

}

export default SettingsModal;