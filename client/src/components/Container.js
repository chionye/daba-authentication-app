import '../App.css';

function Container({children}) {
  return (
    <div className="container w-100">
        <div className="row d-flex justify-content-center align-items-center full-height">
            {children}
       </div>
    </div>
  );
}

export default Container;