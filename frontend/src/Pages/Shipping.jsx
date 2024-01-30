import { useState } from "react"

const Shipping = () => {
    const [fullName, setFullName] = useState()
    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [postalCode, setPostalCode] = useState()
    const [country, setCountry] = useState()
  return (
    <div>Shipping</div>
  )
}

export default Shipping