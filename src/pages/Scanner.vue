<template>
<div data-role="page" id="home">
    <div data-role="main" class="ui-content">
        <!-- <a target="_blank" href="javascript:scan();" style="text-decoration: none"><button>Scan</button></a>
      <a target="_blank" href="#display" style="text-decoration: none"><button>Display Scanned Data</button></a> -->
        <div class="time time-mr">{{ currentTime }}</div>
        <div class="time">{{ currentDay }}, {{ currentMonth }} {{ currentDateNumber }}</div>
        <div id="scanner" @click="scanner()">
            <q-icon name="touch_app" size="50px"></q-icon>
            <p><b>check in</b></p>
        </div>
        <!-- <q-btn round icon="qr_code_scanner" @click="getCurrentPosition()" label="Scan" stack id="scanner-btn" /> -->
        <div class="row justify-center location">
            <q-icon name="pin_drop" /><span>{{ }}</span>
        </div>
        <button id="getPosition" @click="getPosition">CURRENT POSITION</button>
        <button id="watchPosition" @click="watchPosition">WATCH POSITION</button>
        <div class="row aln">
            <div class="col">
                <q-icon name="update" class="icon-dwn" />
                <p>df</p>
            </div>
            <div class="col">
                <q-icon name="history" class="icon-dwn" />
                <p>df</p>
            </div>
            <div class="col">
                <q-icon name="schedule" class="icon-dwn" />
                <p>9:00</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            result: '',
            currentTime: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            }),
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            currentDate: new Date(),
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        }
    },
    created() {
        setInterval(() => {
            this.currentTime = new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            });
        }, 60000);
    },
    methods: {
        scanner() {
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    if (!result.cancelled) {
                        alert("Barcode type is: " + result.format);
                        alert("Decoded text is: " + result.text);
                        this.result = result.format;
                    } else {
                        alert("You have cancelled scan");
                    }
                },
                function (error) {
                    alert("Scanning failed: " + error);
                }
            )
        },
        getPosition() {
      var options = {
        enableHighAccuracy: true,
        maximumAge: 3600000
      }
      var watchID = navigator.geolocation.getCurrentPosition(
        this.onSuccess,
        this.onError,
        options
      );
    },
    watchPosition() {
      var options = {
        maximumAge: 3600000,
        timeout: 3000,
        enableHighAccuracy: true,
      }
      var watchID = navigator.geolocation.watchPosition(
        this.onSuccess,
        this.onError,
        options
      );
    },
    onSuccess(position) {
      alert(
        'Latitude: ' +
          position.coords.latitude +
          '\n' +
          'Longitude: ' +
          position.coords.longitude +
          '\n' +
          'Altitude: ' +
          position.coords.altitude +
          '\n' +
          'Accuracy: ' +
          position.coords.accuracy +
          '\n' +
          'Altitude Accuracy: ' +
          position.coords.altitudeAccuracy +
          '\n' +
          'Heading: ' +
          position.coords.heading +
          '\n' +
          'Speed: ' +
          position.coords.speed +
          '\n' +
          'Timestamp: ' +
          position.timestamp +
          '\n'
      );
    },
    onError(error) {
      alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
    //     getCurrentPosition(){
    //         const onSuccess = function(position) {
    //     alert('Latitude: ' + position.coords.latitude + '\n' +
    //           'Longitude: ' + position.coords.longitude + '\n' +
    //           'Altitude: ' + position.coords.altitude + '\n' +
    //           'Accuracy: ' + position.coords.accuracy + '\n' +
    //           'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
    //           'Heading: ' + position.coords.heading + '\n' +
    //           'Speed: ' + position.coords.speed + '\n' +
    //           'Timestamp: ' + position.timestamp + '\n');
    //   };
      
    //   const onError = function(error) {
    //     alert('code: ' + error.code + '\n' +
    //           'message: ' + error.message + '\n');
    //   };
      
    //   navigator.geolocation.getCurrentPosition(onSuccess, onError);
    //     }
        // getCurrentPosition() {
        //   navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //       alert('Latitude: ' + position.coords.latitude + '\n' +
        //             'Longitude: ' + position.coords.longitude + '\n' +
        //             'Altitude: ' + position.coords.altitude + '\n' +
        //             'Accuracy: ' + position.coords.accuracy + '\n' +
        //             'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        //             'Heading: ' + position.coords.heading + '\n' +
        //             'Speed: ' + position.coords.speed + '\n' +
        //             'Timestamp: ' + position.timestamp + '\n');
        //     },
        //     (error) => {
        //       console.log('------------------------'+'code: ' + error.code + '\n' + 'message: ' + error.message + '\n'+'----------------------------');
        //     }
        //   );
        // }
        // getPosition() {
        //     var options = {
        //         enableHighAccuracy: true,
        //         maximumAge: 3600000
        //     }
        //     var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

        //     function onSuccess(position) {
        //         alert('Latitude: ' + position.coords.latitude + '\n' +
        //             'Longitude: ' + position.coords.longitude + '\n' +
        //             'Altitude: ' + position.coords.altitude + '\n' +
        //             'Accuracy: ' + position.coords.accuracy + '\n' +
        //             'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        //             'Heading: ' + position.coords.heading + '\n' +
        //             'Speed: ' + position.coords.speed + '\n' +
        //             'Timestamp: ' + position.timestamp + '\n');
        //     };

        //     function onError(error) {
        //         console.log('-----------------------------'+'code: ' + error.code + '\n' + 'message: ' + error.message + '\n'+'-------------------------------------------');
        //     }
        // }

    },

    computed: {
        currentMonth() {
            return this.months[new Date().getMonth()];
        },
        currentDay() {
            return this.days[new Date().getDay()];
        },
        currentDateNumber() {
            return new Date().getDate();
        }
    }

}
</script>

<style scoped>
.time {
    font-size: 20px;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    color: #5b5959;
    display: block;
}

.time-mr {
    font-size: 25px;
    margin-top: 100px;
}

#scanner {
    margin: 80px auto 0 auto;
    width: 60%;
    border-radius: 100%;
    text-align: center;
    padding: 70px 60px;
    display: block;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    background-image: linear-gradient(to bottom left, rgb(62, 46, 205), rgb(206, 84, 254));
    color: white;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

}

/* #scanner-btn {
    display: block;
    padding: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    font-size: 25px;
    /* background-color:  rgb(108, 197, 177); */
        /* background-image: linear-gradient(to bottom left, rgb(62, 46, 205), rgb(162, 43, 209));
        color: white; */
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
        /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; }*/ 

.location {
    font-size: 20px;
    margin-top: 20px;
}

.aln {
    margin-top: 100px;
    text-align: center;
}

.icon-dwn {
    color: rgb(62, 46, 205);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    /* color: rgb(108, 197, 177); */
    font-size: 35px;
}
</style>
