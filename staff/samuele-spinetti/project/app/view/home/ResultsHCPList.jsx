import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import logic from '../../logic'

import HealthCareProvider from './HealthCareProvider'

export default function ResultsHCPList() {
    const [searchParams] = useSearchParams()
    const [healthCareProviders, setHealthCareProviders] = useState([])

    const q = searchParams.get('q') || ''
    const distance = Number(searchParams.get('distance') || '10')

    useEffect(() => {
        loadHCP()
    }, [q], distance)

    const loadHCP = () => {
        if (q !== null) {
            navigator.geolocation.getCurrentPosition((position => {
                const coords = [position.coords.latitude, position.coords.longitude]
                try {
                    logic.searchHCP(q, distance, coords)
                        .then(healthCareProviders => setHealthCareProviders(healthCareProviders))
                        .catch(error => {
                            console.error(error)

                            alert(error.message)
                        })
                } catch (error) {
                    console.error(error)

                    alert(error.message)
                }
            }), error => {
                console.error(error)

                aler(error.message)
            })
        }
    }

    return <section className="flex flex-col gap-6">
        {healthCareProviders.map(healthCareProvider => <HealthCareProvider
            key={healthCareProvider._id}
            healthCareProvider={healthCareProvider}
        />)}
    </section>
}