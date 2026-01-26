import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const RainyDay =
    "https://images.unsplash.com/photo-1718917911083-7c830776e337?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HotDay =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const ColdDay =
    "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="Card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RainyDay : info.temp > 15 ? HotDay : ColdDay
          }
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{" "}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component="div"
          >
            <h3>Temperature: {info.temp}&deg;C</h3>
            <h3>Humidity: {info.humidity}%</h3>
            <h3>Min Temp: {info.tempMin}&deg;C</h3>
            <h3>Max Temp: {info.tempMax}&deg;C</h3>
            <h3>Weather: {info.weather}</h3>
            <h3>Feels Like: {info.feelsLike}&deg;C</h3>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
