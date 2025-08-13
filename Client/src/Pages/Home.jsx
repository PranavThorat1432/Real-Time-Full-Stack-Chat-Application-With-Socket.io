import React from 'react'
import Sidebar from '../MyComponents/Sidebar'
import ChatContainer from '../MyComponents/ChatContainer'
import RightSidebar from '../MyComponents/RightSidebar'

const Home = () => {

    const [selectedUser, setSelectedUser] = React.useState(false)
    return (
      <div>
          <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
              <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'grid-cols-2'}`}>
                  <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>

                  <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>

                  <RightSidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
              </div>
          </div>
      </div>
    )
}

export default Home
