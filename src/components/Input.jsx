/* eslint-disable react/prop-types */

const Input = ({ type, changeHandler }) => {
  return (
      <input
        type={type}
        onChange={(e) => changeHandler(e)}
        placeholder="Search..."
        className="border-2 rounded-md p-2 border-slate-600 w-full"
      />
    
  );
};

export default Input;
