import React from 'react'
import { Calendar, Users, LayoutDashboard, Trash2, Hash } from 'lucide-react'
import { Link } from 'react-router'





const Messing = ({ data, deleteDashboard }) => {

  // console.log(data.month)
  const currentDate = new Date();
  // console.log(currentDate.getMonth()+1)
  const cardDate = new Date(`${data.month} 1, ${data.year}`);

  const isCurrentMonth =
    currentDate.getMonth() === cardDate.getMonth() &&
    currentDate.getFullYear() === cardDate.getFullYear();

  return (
    <div className="max-h-70 max-w-xs rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-indigo-50 rounded-lg">
            <Calendar className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="font-bold  text-slate-800">{data.month}/ {data.year}</h3>
        </div>

        <span className={`px-2.5 py-1 rounded-full text-xs font-bold  tracking-wider ${isCurrentMonth
          ? 'bg-green-100 text-green-700 border border-green-200'
          : 'bg-slate-100 text-slate-500 border border-slate-200'
          }`}>
          {isCurrentMonth ? 'Active' : 'Past'}
        </span>
      </div>

      <div className="flex items-center flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-md border border-slate-100">
          <Hash className="w-4 h-4 text-slate-500" />
          <span className="text-xs font-semibold text-slate-700 break-all ">{data._id}</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-md border border-slate-100">
          <Users className="w-4 h-4 text-slate-500" />
          <span className="text-xs font-semibold text-slate-700">{data.advance.length} Fooders</span>
        </div>
      </div>

      <div className="flex justify-between gap-2">
        <Link

        to={`/${data._id}/messing-dashboard`}

          className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-3 rounded-lg text-xs font-semibold transition-colors shadow-sm active:transform active:scale-95"
        >
          <LayoutDashboard className="w-4 h-4" />
          View Dashboard
        </Link>

        <button

          className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg border border-slate-200 transition-all active:transform active:scale-95"
          title="Delete Month Record"
          onClick={() => deleteDashboard(data._id)}
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default Messing
