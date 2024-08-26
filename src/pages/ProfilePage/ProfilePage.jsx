import React from 'react'

const ProfilePage = () => {
  return (
    <>
    <div style={{ justifyContent:'center', display:'flex',marginTop:'10px'}}>
      <img src='https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/428698604_1512018909366000_4023510005264897472_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHWUhPkCy5SHyefXsvkaKFJ6D1ekIu1VSjoPV6Qi7VVKOiztvvIo6gdgt74IWGHTpcyzwhhBddFfMCSTv0FtSkd&_nc_ohc=-c3rrM6daIgQ7kNvgEfYzY2&_nc_ht=scontent.fhan2-4.fna&oh=00_AYCLqaC1Llj4lamxEECl0LsqZHA1eWLDBuk3JcPenyAe5A&oe=66D27E6C'
      width="150px" height="150px" style={{borderRadius:"50%"}} >
      </img> 
      <div b></div>
    </div>
    <div style={{
      margin:'10px 150px 10px 150px',
        padding: '20px',
        border: '2px solid #ccc', 
        borderRadius: '10px',
        backgroundColor: '#fff', 
        textAlign: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' 
      }}>
         <h1>Họ và tên: Nguyễn Minh Đức</h1> 
         <h3 style={{
          fontSize: '1.5em', 
        
          marginTop: '10px' 
        }}>
          Lớp:  -SBD:
        </h3>
         <a href='https://github.com/mnhh1811ieeu' style={{fontSize:'17px'}}>Github</a>
    </div>
    </>
  )
}

export default ProfilePage