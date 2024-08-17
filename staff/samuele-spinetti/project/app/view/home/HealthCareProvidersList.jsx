import { useEffect, useState } from 'react'

import logic from '../../logic'

import HealthCareProvider from './HealthCareProvider'

export default function HealthCareProvidersList() {
    const [healthCareProviders, setHealthCareProviders] = useState([])

    useEffect(() => {
        try {
            logic.getAllHCPs()
                .then(healthCareProviders => setHealthCareProviders(healthCareProviders))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    return <section className="flex flex-col gap-6">
        {healthCareProviders.map(healthCareProvider => <HealthCareProvider
            key={healthCareProvider.id}
            healthCareProvider={healthCareProvider}
        />)}
    </section>
}