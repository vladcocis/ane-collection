import axios from "axios"
import { useState, useEffect } from 'react'

export default function Home() {
	const [data, setData] = useState(null)

	useEffect(() => {
		async function fetchAppointments() {
			const response = await axios.get('/api/hello')

			if (response.data.status !== 200) {
				console.error('Internal server error')
			}

			setData(response.data)
		}

		fetchAppointments()
	}, [])

	!data && <h1>Loading...</h1>

	return (
		<h1>Yes</h1>
  	)
}