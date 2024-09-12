<template>
    <div class="breadcroumb-area bread-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcroumb-title">
              <h1>{{ title }}</h1>
              <h6>
                <a href="/">Home</a> / {{ redirection }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    redirection: {
      type: String,
      required: true,
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .breadcroumb-area {
    background-color: #f4f4f4;
    padding: 40px 0;
  }
  
  .breadcroumb-title h1 {
    font-size: 32px;
    margin-bottom: 10px;
  }
  
  .breadcroumb-title h6 {
    font-size: 14px;
  }
  
  .breadcroumb-title a {
    color: #007bff;
    text-decoration: none;
  }
  </style>
  