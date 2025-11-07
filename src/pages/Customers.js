import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Customers() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    fetchCustomers()
  }, [])

  async function fetchCustomers() {
    const { data, error } = await supabase.from('customers').select('*')
    if (error) console.error('Fejl ved hentning:', error)
    else setCustomers(data)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Kunder</h1>
      <table className="min-w-full bg-white rounded-xl shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-3">Navn</th>
            <th className="text-left p-3">Type</th>
            <th className="text-left p-3">By</th>
            <th className="text-left p-3">E-mail</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{c.name}</td>
              <td className="p-3">{c.type}</td>
              <td className="p-3">{c.city}</td>
              <td className="p-3">{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
