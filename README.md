# 🎹 Piano Verse: Just Key It
An interactive **Web Piano Application** built using **Flask** and **JavaScript**, allowing users to play a virtual piano with both mouse and keyboard input. Designed to be responsive, with real-time sound playback and a visually engaging experience.

## 🚀 Live Demo
👉 [Try the App on Render](https://piano-app-a0o0.onrender.com/)  

## 🛠️ Key Skills & Technologies

- **Python Flask** – Backend routing and server logic  
- **JavaScript** – Dynamic key event handling and interactivity  
- **HTML/CSS** – Responsive layout and visual design  
- **Pygame** – Local audio playback for realistic piano sounds


## 🎯 Features

- 🎹 **Interactive Piano**: Play notes using mouse clicks or keyboard keys  
- ⚫⚪ **White & Black Keys**: Styled to mimic a real piano layout  
- 🔊 **Real-Time Sound**: Immediate audio feedback using Pygame  
- 💻 **Responsive Design**: Works across devices and screen sizes  
- ✨ **Visual Effects**: Animated key presses and floating musical notes

## 📁 Project Structure
<pre>
PIANO_WEB_APP/
├── Fonts/                  
├── static/
│   ├── sounds/             
│   ├── piano.js            
│   └── style.css           
├── templates/
│   └── index.html          
├── .gitignore             
├── app.py                  
├── Procfile                
├── README.md               
├── render.yml              
└── requirements.txt 
</pre>

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Par-web-lab/piano-app.git
   cd Piano-web-app
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask app**
   ```bash
   python app.py
   ```