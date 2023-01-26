import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react"
import { About, Title } from "../../../../common";
import { FormContact } from "../../components";
import { useSendMail } from "../../../../common/hooks/useSendMail";

export const Contact = () => {
    const { sendMail } = useSendMail()
    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyD10NPCNsverOUM7bAP1hDzL0-p4_IvMVw", });
    const firm = useMemo(() => ({ lat: 4.62014495193068, lng: -74.06856083995999 }), [])
    return (
        <section className="Container_Contact">
            <div className="Container_Contact--one" >
                {isLoaded && (
                    <GoogleMap zoom={15} center={firm} mapContainerClassName="map-contanier" options={{ scrollwheel: false, draggable: false }} onLoad={() => {
                    }}>
                        <MarkerF position={firm} />
                    </GoogleMap>)}
            </div>
            <div className="Container_Contact--two">
                <About text={"Solucionamos tus dudas"} />
                <Title text="Contáctenos" />
                <FormContact onSubmit={(values: any) => { sendMail(values) }} />
            </div>
            <div>
                <a></a>
                <a></a>
                <a></a>
            </div>


        </section>
    )
}