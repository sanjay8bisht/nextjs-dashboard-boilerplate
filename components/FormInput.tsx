const FormInput = ({ type, value, onChangeEvent }) => {
    return (
        <div className="pb-[16px]">
            <input
                className="w-[calc(85%)] p-[12px] bg-none rounded-[10px] border-solid border-[1px] border-black focus:border-indigo-700"
                onChange={onChangeEvent}
                placeholder="User Name"
                required
                type={type}
                value={value}
            />
        </div>
    );
};

export default FormInput;
