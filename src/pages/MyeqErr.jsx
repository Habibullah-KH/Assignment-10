import { VscBracketError } from "react-icons/vsc";

const MyeqErr = () => {
    return (
        <>
            <div className="py-48 flex items-center justify-center">
                <div className="flex font-bold text-3xl text-red-400">
                <h3>No Data Found</h3>
                <VscBracketError />
                </div>
            </div>
        </>
    );
};

export default MyeqErr;