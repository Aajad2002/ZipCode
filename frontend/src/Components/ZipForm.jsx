import React, { useState } from "react";

const ZipForm = ({ onFetchLocation }) => {
    const [postalCode, setPostalCode] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(
                `https://api.zippopotam.us/in/${postalCode}`
            );
            const data = await response.json();
            onFetchLocation(data);
        } catch (error) {
            console.error(error);
            // Handle error here and show an error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-[92vh] relative  flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: 'url(https://tenor.com/view/4pellogo-solar-hyderabad-solar-hyderabad-fourth-partner-gif-14712492)' }}>
            <div className="w-full md:max-w-[500px] p-4 flex flex-col  items-center justify-center md:px-10 lg:p-24 h-full md:h-[500px] lg:h-[500px] bg-black bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-white absolute m-auto gap-2">
                <h1 className='text-4xl font-bold'>Zip <span className='font-black'>Code</span></h1>
                <p className='mt-2 text-center'>Enter below a ZipCode you want to know the location of that </p>
                <form className="flex" onSubmit={handleSubmit}>
                    <input
                        className='text-black px-2 py-1 rounded-l-md border-2 border-white'
                        type="text"
                        placeholder="Enter Zip Code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                    <button className="rounded-r-md border-2 border-zinc-100  text-zinc-100 px-2 py-1 cursor-pointer" type="submit" disabled={loading}>
                        Search
                    </button>
                </form>
            </div>
            <img className="h-full w-full" src="https://media2.giphy.com/media/3o6ZtofzL5V7JlZ5N6/giphy.gif?cid=ecf05e47biq4hn8x8zhxtk6wnc7u2nldlai18t60o181dvtr&ep=v1_gifs_search&rid=giphy.gif&ct=g" />

        </div>
    );
};

export default ZipForm;
