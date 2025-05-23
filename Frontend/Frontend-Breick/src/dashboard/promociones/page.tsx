import MiniFooter from "../../components/MiniFooter"
import PastPromocions from "../../components/Promociones/PastPromocions"
import PastPromocions2 from "../../components/Promociones/PastPromocions2"
import PastPromocions3 from "../../components/Promociones/PastPromocions3"
import { Stats } from "../../components/Promociones/Stats"
import PromocionesVigentes from "../../components/Promociones/VigentPromocions"

export const Promociones = () => {
  return (
    <>
      <div className="banner">
          <div
            className="banner-image"
            style={{ backgroundImage: `url(https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/481902139_1074006941428759_5737538574342882267_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-fM7Cd8tctkQ7kNvwETqo-w&_nc_oc=Adlou2m2ROuNMhoT70FBGGm-W1IHISiwReuj2b5vdnematUxGHR_9zQrBlu_EYqyZ60&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=sflj7Im7DsoVm2y-KoKAQw&oh=00_AfL62vdk8WkuChZTmldK3tgwLXn73ui9lQoiZjdBdDO-6g&oe=68365008)` }}
          />
          <div className="banner-content">
            <h1 className="banner-title">PROMOCIONES</h1>
          </div>
        </div>
      <PromocionesVigentes/>
      <Stats/>
      <PastPromocions/>
      <PastPromocions2/>
      <PastPromocions3/>
      <MiniFooter/>
    </>
  )
}
