import assert from "@fvilers/assert";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import GoogleMap from "./GoogleMap";

const render = (status: Status) => {
  return <pre>{status}</pre>;
};

function App() {
  assert(
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    "Couldn't find the API key. You should add it to the 'REACT_APP_GOOGLE_MAPS_API_KEY' environment variable."
  );

  return (
    <div>
      <h1>@googlemaps/react-wrapper issue</h1>
      <Wrapper
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        render={render}
      >
        <GoogleMap
          options={{ center: { lat: -34.397, lng: 150.644 }, zoom: 4 }}
        />
      </Wrapper>
    </div>
  );
}

export default App;
