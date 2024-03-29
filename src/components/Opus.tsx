import { Dispatch, SetStateAction } from "react";
import BitrateSlider from "./BitrateSlider";

interface OpusProps {
  setOpusEncodingType: Dispatch<SetStateAction<string>>;
  encodingType: string;
}

const Opus: React.FC<OpusProps> = ({ setOpusEncodingType, encodingType }) => {
  return (
    <div id="Opus">
      <label htmlFor="opus_encoding_type">Encoding Type</label>
      <select onChange={(e) => setOpusEncodingType(e.target.value)} value={encodingType}>
        <option disabled>Select Encoding Type</option>
        <option value="vbr">VBR (with a target bitrate)</option>
        <option value="cbr">CBR (Constant Bitrate)</option>
      </select>
      <BitrateSlider initialValue="192" min="16" max="512" step="16" />
      <i>
        If your file contains only 1 audio channel, the bitrate will be capped at 256 kbps as Opus
        does not support more than 256 kbps per channel.
      </i>
    </div>
  );
};

export default Opus;
