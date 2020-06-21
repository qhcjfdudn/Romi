import React from 'react'
import ManagePlaces from '../components/admin/ManagePlaces'
import ManageEvents from '../components/admin/ManageEvents'
import ManageRobots from '../components/admin/ManageRobots'

function AdminPage() {
  return (
    <div>
      <ManagePlaces />
      <ManageEvents />
      <ManageRobots />
    </div>
  )
}

export default AdminPage
