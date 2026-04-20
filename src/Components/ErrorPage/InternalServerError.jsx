import React from 'react'
import { ServerCrash, ArrowLeft } from 'lucide-react';

const InternalServerError = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 px-4 absolute z-100 ">
            <div className="text-center space-y-6 max-w-lg">
                {/* Icon/Illustration */}
                <div className="flex justify-center">
                    <div className="p-4 bg-amber-100 rounded-full ">
                        <ServerCrash size={48} className="text-amber-600" />
                    </div>
                </div>

                {/* Text Content */}
                <h1 className="text-4xl font-bold text-gray-900"><span className='text-red-700'>500</span> Internal Server Error</h1>
                <p className="text-lg text-red-600">
                    An unexpected error occurred. Please try again in a few minutes. We are working hard to fix the issue.
                </p>

                {/* Action Buttons */}
                <div className="pt-6">
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InternalServerError
