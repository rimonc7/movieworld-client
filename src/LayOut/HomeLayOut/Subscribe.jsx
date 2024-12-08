import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscribe = () => {
    const handleSubscriber = e => {
        e.preventDefault();
        const form= e.target;
        const subscriber = form.email.value;
        const newSub= {subscriber}
        fetch('https://movieworld-server.vercel.app/subscribers',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newSub)
        })
        .then(res=>res.json())
        .then(data=>{
            form.reset();
            toast.success('Thanks for Subscribing')
        })
    }
    return (
        <div className="w-full max-w-2xl text-center space-y-6 mx-auto py-8">
            <div className="flex items-center justify-center space-x-4">
                <div className="flex-grow border-t-2 border-blue-500"></div>
                <h1 className="text-4xl font-bold text-gray-800 tracking-wide">NEWSLETTER</h1>
                <div className="flex-grow border-t-2 border-blue-500"></div>
            </div>
            <p className="text-gray-600 italic">Subscribe to our newsletter.</p>
            <div className="flex items-center justify-center space-x-2 mx-4">
                <form onSubmit={handleSubscriber} action="" className="space-x-2">
                    <input
                        type="email"
                        name="email"
                        placeholder="Subscribe with email"
                        className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-gray-700">
                        SUBSCRIBE
                    </button>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={true}
                theme="colored"
            />
        </div>
    );
};

export default Subscribe;