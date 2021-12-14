import Image from 'next/image';
import bookm from '../public/bookm.jpg';
const ModalSuccess = ({ setOpen, setSuccess }) => {
  const handleSucces = () => {
    setOpen(false);
    setSuccess(false)
  }
  return (
    <div className='modal-success-container'>
      <div className='modal-success-content'>
        <h3>Ура</h3>
        <p>
          Вы успешно вошли в профиль. <br /> Теперь закладки будут доступны на
          всех ваших устройствах.
        </p>
        <Image src={bookm} />
      </div>
      <button onClick={handleSucces}>ПРОДОЛЖИТЬ ЧИТАТЬ</button>
    </div>
  );
};

export default ModalSuccess;
