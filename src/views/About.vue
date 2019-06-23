<template>
  <div class="about container">
    <div id="abstract" class="row">
      <p>This project was created as our Bachelor's Thesis in Computer Science at the Zurich University of Applied Science (ZHAW).</p>
      <p>The aim of this work is to apply <i>Blind Audio Source Separation (BASS)</i> using neural networks, in particular to separate music audio signals into voice and instrumental parts.</p>
      <p>The challenge is part of the research field <i>Music Information Retrieval (MIR)</i>. Apart from the usefulness of audio source separation on its own (for instance for musicians), <i>BASS</i> has applications in many other areas such as optimizing voice quality in hearing aids or post-production of audio in movies.</p>
      <p> goal is to first reproduce previous results, second to compile a suitable training set that is superior to existing ones both in terms of quality and quantity, and thirdly to examine and compare different neural networks architectures applicable to the problem of BASS. An optimized network architecture is proposed. In addition, a web application is developed which allows users to split audio files into their instrumental and vocal parts.</p>
      <p>For pre-processing, the songs which are available as raw audio files are converted into complex spectrograms. The network receives the magnitudes of these spectrograms as input. The output corresponds to the magnitude spectrograms of the estimated vocal and instrumental tracks, which are converted back into an audio signal. The work also examines ways in which the spectrograms can be normalized.</p>
      <p>The quality of the network is evaluated automatically. In order to be able to compare the results with those of other work, the Source to Distortion Ratio (SDR), Source to Inference Ratio (SIR) and Source to Artefacts Ratio (SAR) are calculated. These are implemented in BSSEval v4 (mir_eval).</p>
      <p>We found that earlier approaches could be reproduced and outperformed. By using the extended training set and the optimized network, the best results achieved are an SDR value of 8.1 for the vocal track and 14.2 for the instrumental track. This corresponds to an improvement of about 64 % and 31 %, respectively, compared to a previous year's approach. The values correspond to the state-of-the-art in current research.</p>
      <p>This fully functional web application is available at www.unmix.io and works with various sources such as file uploads or Youtube links.</p>
    </div>
    <div id="devs" class="row">
      <div class="dev col-md-4">
        <img class="logo" alt="unmix.io" src="../assets/devs/david.svg">
        <div>
          <p class="name">David Flury</p>
          <a href="mailto:david@unmix.io">david@unmix.io</a>
        </div>
      </div>
      <div class="dev col-md-4">
        <img class="logo" alt="unmix.io" src="../assets/devs/andreas.svg">
        <div>
          <p class="name">Andreas Kaufmann</p>
          <a href="mailto:andreas@unmix.io">andreas@unmix.io</a>
        </div>
      </div>
      <div class="dev col-md-4">
        <img class="logo" alt="unmix.io" src="../assets/devs/raphael.svg">
        <div>
          <p class="name">Raphael Müller</p>
          <a href="mailto:raphael@unmix.io">raphael@unmix.io</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#abstract {
  text-align: justify;
}

#devs {
  margin-top: 20px;
  
  .dev {
    img {
      width: 100%;
    }

    .name {
      margin-top: 8px;
      font-weight: bold;
    }
  }
}
</style>