interface modalProps {
  isOpen: boolean;
  onClose: () => void;
  links: string[];
}

const Modal = ({ isOpen, onClose, links }: modalProps) => {
  if (!isOpen) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          paddingLeft: "60px",
          paddingTop: "60px",
          paddingRight: "60px",
          background: "black",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 className="text-white text-2xl">Related Problems</h1>
        {links.map((link, index) => (
          <div key={index} className="py-5">
            <a href={link} className="text-white">
              {link}
            </a>
          </div>
        ))}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
