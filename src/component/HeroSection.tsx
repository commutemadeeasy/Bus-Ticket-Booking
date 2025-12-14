import { useState } from "react";
import { MapPin, Users, Bus as BusIcon, Search } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";

import nepalmaphero from "../assets/nepalmaphero.webp"; // ✅ background image

const nepalCities = [
  "Kathmandu",
  "Pokhara",
  "Chitwan",
  "Lumbini",
  "Biratnagar",
  "Birgunj",
  "Butwal",
  "Dharan",
  "Bhaktapur",
  "Lalitpur",
  "Janakpur",
  "Nepalgunj",
  "Hetauda",
  "Dhangadhi",
  "Bharatpur",
];

const HeroSection = () => {
  const [tripType, setTripType] = useState<"oneWay" | "twoWay">("oneWay");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [bookingFor, setBookingFor] = useState("adult");
  const [gender, setGender] = useState("male");
  const [vehicleType, setVehicleType] = useState("bus");

  const handleSearch = () => {
    const bookingData = {
      tripType,
      fromCity,
      toCity,
      date: date ? date.toISOString() : "",
      bookingFor,
      gender,
      vehicleType,
    };
    console.log("Booking Data:", bookingData);
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* ✅ Background Map */}
      <div className="absolute inset-0">
        <img
          src={nepalmaphero}
          alt="Nepal Map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/60 to-background" />
      </div>

      {/* Animated Bus */}
      <div className="absolute top-[35%] left-0 w-full pointer-events-none overflow-hidden">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: "100vw" }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <BusIcon className="w-12 h-12 text-secondaryorange drop-shadow-lg transform -scale-x-100" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-12 pb-20">
        {/* Hero Text */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Travel Across <span className="text-gradient">Nepal</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your bus tickets easily and explore the beautiful landscapes of
            Nepal with comfort and safety.
          </p>
        </div>

        {/* Booking Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elevated p-6 md:p-8">
            {/* Trip Type Toggle */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setTripType("oneWay")}
                className={cn(
                  "px-6 py-2 rounded-full font-medium transition-all duration-300",
                  tripType === "oneWay"
                    ? "bg-primaryblue text-primary-foreground shadow-soft"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                One Way
              </button>
              <button
                onClick={() => setTripType("twoWay")}
                className={cn(
                  "px-6 py-2 rounded-full font-medium transition-all duration-300",
                  tripType === "twoWay"
                    ? "bg-primaryblue text-primary-foreground shadow-soft"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                Two Way
              </button>
            </div>

            {/* Search Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {/* From */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primaryblue" />
                  From
                </label>
                <Select value={fromCity} onValueChange={setFromCity}>
                  <SelectTrigger className="h-12 bg-background border-border w-full">
                    <SelectValue placeholder="Select departure city" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border z-50">
                    {nepalCities.map((city) => (
                      <SelectItem key={city} value={city.toLowerCase()}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* To */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-secondaryorange" />
                  To
                </label>
                <Select value={toCity} onValueChange={setToCity}>
                  <SelectTrigger className="h-12 bg-background border-border w-full">
                    <SelectValue placeholder="Select destination city" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border z-50">
                    {nepalCities.map((city) => (
                      <SelectItem key={city} value={city.toLowerCase()}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="space-y-2  w-full">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <CiCalendarDate className="w-4 h-4 text-green-500" />
                  Date
                </label>
                <DatePicker
                  selected={date}
                  onChange={(d) => setDate(d)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="w-full border border-gray-200 rounded-md px-3 py-1 focus:outline-none"
                  placeholderText="Select date & time..."
                  minDate={new Date()}
                />
              </div>
            </div>

            {/* Additional Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Booking For */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-primaryblue" />
                  Booking For
                </label>
                <Select value={bookingFor} onValueChange={setBookingFor}>
                  <SelectTrigger className="h-10 bg-background border-border w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border z-50">
                    <SelectItem value="adult">Adult</SelectItem>
                    <SelectItem value="child">Child</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  Passenger
                </label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger className="h-10 bg-background border-border w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border z-50">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Vehicle Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <BusIcon className="w-4 h-4 text-secondaryorange" />
                  Vehicle Type
                </label>
                <Select value={vehicleType} onValueChange={setVehicleType}>
                  <SelectTrigger className="h-10 bg-background border-border w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border z-50">
                    <SelectItem value="bus">Bus</SelectItem>
                    <SelectItem value="hiace">Hiace</SelectItem>
                    <SelectItem value="sumo">Sumo</SelectItem>
                    <SelectItem value="electric">Electric Bus</SelectItem>
                    <SelectItem value="deluxe">Deluxe Bus</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Search Button */}
            <Button
              variant="orange"
              size="default"
              className="w-full md:w-auto md:px-16"
              onClick={handleSearch}
            >
              <Search className="w-5 h-5 mr-2" />
              Search Tickets
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
