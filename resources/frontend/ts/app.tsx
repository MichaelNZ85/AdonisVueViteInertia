import React from 'react'
import reactLogoUrl from '../static/images/logo.svg'
import '../css/app.css'

export default function App() {
	return (
		<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}><img src={reactLogoUrl} alt="React Logo" width={200}/>
        <p>Hello from reacts world and it works perfectly</p></div>
		</div>
	)
}
