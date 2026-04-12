import React from 'react'
import { Hammer, ArrowLeft } from 'lucide-react';

const UnderDevelope = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 ">
            <div className="text-center space-y-6 max-w-lg">
                {/* Icon/Illustration */}
                <div className="flex justify-center">
                    <div className="p-4 bg-amber-100 rounded-full animate-bounce">
                        <Hammer size={48} className="text-amber-600" />
                    </div>
                </div>

                {/* Text Content */}
                <h1 className="text-4xl font-bold text-gray-900">Under Construction</h1>
                <p className="text-lg text-gray-600">
                    We're currently working hard to bring you something amazing.
                    This page is under development and will be live soon!
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

export default UnderDevelope
