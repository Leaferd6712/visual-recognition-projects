/**
 * ================================================================
 *  VISUAL RECOGNITION PORTFOLIO — PROJECT DATA FILE
 *  Author: Mathias
 *
 *  HOW TO ADD OR EDIT A PROJECT:
 *  ─────────────────────────────────────────────────────────────
 *  1. Find the right section below (objectDetection,
 *     instanceSegmentation, or classification).
 *  2. Copy one of the existing project blocks ({ ... }).
 *  3. Paste it inside the "projects: [ ]" array.
 *  4. Fill in the fields — leave any unknown field as "".
 *  5. Save this file. Your changes appear automatically.
 *
 *  LINK STATUS:
 *    - Provide a full URL → button is active and clickable.
 *    - Leave as ""        → button shows as disabled (greyed out).
 *
 *  PROJECT MEDIA:
 *    - Use "image" for a thumbnail/screenshot (e.g., "images/project.jpg")
 *    - Use "video" for a demo video (e.g., "Videos/demo.mp4")
 *    - If both are provided, video takes priority
 *    - If neither, a placeholder appears
 *
 *  PROJECT STATUS:
 *    "live"     → green   "Live" pill
 *    "progress" → orange  "In Progress" pill
 *    "soon"     → grey    "Coming Soon" pill
 * ================================================================
 */

const PORTFOLIO = {

  /* ────────────────────────────────────────────────────────────
     OWNER  —  update once, appears across the whole site
  ──────────────────────────────────────────────────────────── */
  owner: {
    name:     "Mathias",
    github:   "https://github.com/Leaferd6712",
    linkedin: "",    // ← paste your LinkedIn profile URL
    email:    "",    // ← paste your contact email
    tagline:  "Computer Vision Engineer · Object Detection · Segmentation · Classification"
  },


  /* ================================================================
     OBJECT DETECTION
  ================================================================ */
  objectDetection: {

    pageTitle: "Object Detection",
    intro: "Real-time detection models custom-trained on domain-specific datasets using YOLO architectures. Each project includes a live demo, an interactive Colab notebook, and documented methodology.",

    /*  FEATURED PROJECT — displayed as the hero card at the top.
        Set to null if you have no featured project yet.          */
    featured: {
      title:       "Rock Paper Scissors in 3D!",
      date:        "Jan 2026",
      description: "A YOLOv5 object detection system that recognises rock, paper, and scissors hand gestures in real time with a 98% confidence rate. Trained on a custom 3D dataset captured from multiple angles and lighting conditions.",
      model:       "YOLOv5",
      accuracy:    "98% Conf.",
      dataset:     "Custom 3D",
      image:       "",                  // ← path to thumbnail, e.g. "images/rps-thumb.jpg"
      video:       "Videos/demo-vid.mp4",
      status:      "completed",
      links: {
        github: "",    // ← paste GitHub repo URL here
        colab:  "",    // ← paste Colab notebook URL here
        demo:   "https://sites.google.com/view/rockpaperscissorsin3d?usp=sharing",
        docs:   "",    // ← paste blog / documentation URL here
      }
    },

    /*  GRID PROJECTS — listed below the featured card.
        Add more blocks here following the same format.           */
    projects: [
      {
        title:       "Rock Paper Scissors Android App",
        date:        "Dec 2025",
        description: "A lightweight YOLOv5 model optimised for on-device inference and deployed inside an Android application.",
        model:       "YOLOv5-Lite",
        accuracy:    "",
        dataset:     "Custom Mobile",
        image:       "images/Rock Paper Scissors Android App phone demo.png",
        status:      "progress",
        links: {
          github: "",
          colab:  "",
          demo:   "",
          docs:   "",
        }
      },
      {
        title:       "Recyclable Plastic Detection",
        date:        "Jan 2026",
        description: "Detects 7 plastic categories: HDPE, Multi-layer, PET Bottle, Single-Use, Single-Layer, Squeeze Tube, and UHT boxes — supporting smarter recycling workflows.",
        model:       "YOLOv8",
        accuracy:    "",
        dataset:     "Custom",
        image:       "images/Recyclable Plastic Detection image of 7.png",
        status:      "progress",
        links: {
          github: "",
          colab:  "",
          demo:   "",
          docs:   "",
        }
      },
      {
        title:       "Archaeological Risk Detection",
        date:        "Jan 2026",
        description: "Identifies common hazards in archaeological fieldwork: loose rocks, poisonous weeds, and dangerous excavation pits.",
        model:       "YOLOv8",
        accuracy:    "",
        dataset:     "Custom",
        image:       "images/Archaeological Risk Detection with all the risks.png",
        status:      "progress",
        links: {
          github: "",
          colab:  "",
          demo:   "",
          docs:   "",
        }
      },
      {
        title:       "Australian Banknote Detection",
        date:        "Feb 2026",
        description: "Detects and localises $5, $10, $20, $50, and $100 Australian banknotes using bounding-box regression.",
        model:       "YOLOv8",
        accuracy:    "",
        dataset:     "Custom",
       // image:       "images/pic05.jpg",
        video: "Videos/australian bill s demo.mp4",
        status:      "progress",
        links: {
          github: "",
          colab:  "",
          demo:   "",
          docs:   "",
        }
      },
      {
        title:       "Fruit Detection",
        date:        "Feb 2026",
        description: "Detects 4 common fruits — apple, banana, orange, and pear — in real time across varied backgrounds and lighting.",
        model:       "YOLOv8",
        accuracy:    "",
        dataset:     "Custom",
        image:       "images/fruit images with all 4.jpg",
        status:      "progress",
        links: {
          github: "",
          colab:  "",
          demo:   "",
          docs:   "",
        }
      },
      {
        title:       "Banana Condition Detection",
        date:        "Feb 2026",
        description: "Distinguishes fresh bananas from rotten ones to support food-quality control and reduce waste.",
        model:       "YOLOv8",
        accuracy:    "",
        dataset:     "Custom",
        image:       "images/banana condition test.png",
        status:      "progress",
        links: {
          github: "",
          colab:  "",
          demo:   "",
          docs:   "",
        }
      },
      {
        title:       "Fresh or Rotten Fruits Detection",
        date:        "Feb 2026",
        description: "Multi-class model that classifies 3 common fruits as fresh or rotten, enabling automated produce sorting.",
        model:       "YOLOv8",
        accuracy:    "",
        dataset:     "Custom",
        image:       "images/Fresh or Rotten Fruits Detection all 3.png",
        status:      "progress",
        links: {
          github: "",
          colab:  "",
          demo:   "",
          docs:   "",
        }
      },

      // ── ADD NEW OBJECT DETECTION PROJECTS BELOW ───────────────
      // Copy the block above and fill in the details.
    ]
  },


  /* ================================================================
     INSTANCE SEGMENTATION
  ================================================================ */
  instanceSegmentation: {

    pageTitle: "Instance Segmentation",
    intro: "Pixel-level segmentation models that identify and outline individual object instances with precise masks, enabling fine-grained visual analysis beyond bounding boxes.",

    /*  Set to a project object (same format as featured above)
        when you have a project to feature. Set to null otherwise. */
    featured: null,

    projects: [

      // ── ADD YOUR INSTANCE SEGMENTATION PROJECTS BELOW ─────────
      // Copy this template block, remove the /* */ and fill it in:
      /*
      {
        title:       "Project Title",
        date:        "Month Year",
        description: "Describe what this model does and why it matters.",
        model:       "YOLOv8-seg",
        accuracy:    "XX% mAP",
        dataset:     "Dataset Name",
        image:       "images/your-image.jpg",
        status:      "soon",     // "live" | "progress" | "soon"
        links: {
          github: "",
          colab:  "",
          demo:   "",
          docs:   "",
        }
      },
      */
    ]
  },


  /* ================================================================
     CLASSIFICATION
  ================================================================ */
  classification: {

    pageTitle: "Classification",
    intro: "Image classification models trained to identify and categorise visual content at speed. From fine-grained recognition to multi-class prediction, each model is optimised for accuracy and real-world use.",

    featured: null,

    projects: [
      {
        title:       "Clock Classification",
        date:        "Jan 2026",
        description: "A mini deep-learning classifier for distinguishing clock types.",
        model:       "",
        accuracy:    "",
        dataset:     "Custom",
        image:       "",
        status:      "soon",
        links: {
          github: "",
          colab:  "",
          demo:   "",
          docs:   "",
        }
      },

      // ── ADD MORE CLASSIFICATION PROJECTS BELOW ─────────────────
      // Copy the block above and fill in the details.
    ]
  }

};
