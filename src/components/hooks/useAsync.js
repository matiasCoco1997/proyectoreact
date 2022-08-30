import { useState, useEffect} from 'react'

export const useAsync = ( asyncFunction, dependencies = [] ) =>{

    const [information, setInformation] = useState ()
    const [error, setError] = useState ()
    const [isLoading, setIsLoading] = useState (true)

    useEffect(() => {

        setIsLoading(true)
    
        asyncFunction().then(response => {
    
            setInformation(response)
    
        }).catch(error => {
    
            setError(error)
    
        }).finally( () =>{

            setIsLoading(false)

        })
    
      }, dependencies) 

      return {
        information,
        error,
        isLoading
    }

}

