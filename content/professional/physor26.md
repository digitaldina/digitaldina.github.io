---
title: PHYSOR'26
date: 2022-07-23
---


On April 19–23, I had the honour of presenting research I worked on as part of the University of Sharjah at the 36th International Conference on the Physics of Reactors PHYSOR 2026 established by the American Nuclear Society held at the Centro Congressi Lingotto, Turin, Italy.

Since 1990, this conference has been has been the leading showcase for the latest innovations in reactor physics advancements. Looking back at the proceedings of PHYSOR’90, the main topics of software for modelling reactor physics and operations, research into advanced reactor designs, code validation, methods, and more were similarly the focus of a large portion of the plenary, technical, and poster sessions that were presented 36 years later. Yet still, within the same fields of research, it’s clear how far reactor physics has advanced in such a short time span, especially given the new topic categories. From nuclear space systems to nuclear non-proliferation, novel and pertinent applications that will shape the future of clean power generation are still being generated, validated, and designed today.

The sun was shining particularly bright (hence the squinting) that spring morning in front of the Centro Congressi Lingotto in Turin, Italy.

For every 3 editions of the conference hosted in the U.S, a bid is opened to host it outside the U.S. This year’s bid was won by newcleo and Politecnico di Milano. Hosted at FIAT’s first automobile factory, it was a treat to experience the city’s rich engineering history along it’s advancement towards the future, which were outlined in some of my favourite talks that I attended presented by researchers at Politecnico di Turino, including the innovative paper presented by Lorenzo Tutolo investigating the possibility of using Lunar Regolith as a thermal buffer for heat pipes in reactors used for space applications, and Carolina Introini’s presentation of work on switching between high and low fidelity simulations (as each has trade-offs & advantages) using shallow recurrent decoders (a novel ML technique) to essentially be able to (for example) solve a multi-group diffusion equation using time-series data from a simple point kinetics model, this was incredibly impressive and I’m glad the researchers open-sourced this work as it’s applications are clearly endless! Very excited to try it out myself.

Posters around the Centro Congressi Lingotto showcasing FIAT’s history, and the automobiles that the center used to manufacture during it’s days as a factory.

Other sessions were of great benefit in terms of learning more about the current state of reactor physics, and were also a joy to experience in real life to get to know the presenters as the conference went on. My favourites included Dr. Akio Yamamoto’s talk about the future of reactor simulation codes & nuclear education, Dr. Walid Metwally’s presentation on the IAEA’s collaboration with academic institutions (including Uos!) to develop a Nuclear Security Education program, the technical session detailing the elegant solution by Dr. Roberto Ponciroli et al at Argonne National Laboratory using Greene’s theorem to solve the challenge of accurately reconstructing core power distributions for reactor designs where in-core sensors may not be viable [1]. The simplicity & robustness of this method blew me away, as well as Logan Burnett et al at MIT & the University of Michigan who reconstructed a full CAD model of a Westinghouse PWR using only publicly available information to study in core flow field reconstruction using CNNs for digital twins! [2] The dedication of their team to comb through and extrapolate on the (relatively minimal) information available about this reactor design to make such a high fidelity simulation was inspiring. I’ve linked the related papers below for those interested in learning more.

[1] https://arxiv.org/pdf/2505.09766
[2] (will edit to include, upon release of conference proceedings)

Dr. Akio Yamamoto’s presentation on the future of reactor physics simulation codes & the future of nuclear education.

Looking towards the future of reactor physics, (while assessing the current reliance on simulations & physics code validation on data that is aging and often not reflective of accurate conditions in new generation reactors) the closing plenary session which included talks given by Dr. Nicole Virgili from the US Department of Nuclear Energy and Prof. Luka Snoj from the Jozef Stefan Institute highlighted the importance of investment in experimental reactors for validation data. I couldn’t agree more with the points raised here. I asked the plenary speakers about their experience & thoughts on sharing reactor experimental data between academic institutions and government or private institutions in charge of the experimental reactors. Their response reflected the (at least European) prevailing attitude of open access within approved organizations to facilitate this type of collaboration, which I can see is already becoming a trend internationally as well.

It was an honour to present NucBench: A Benchmark Framework for Evaluating Multimodal Large Language Models in Nuclear Engineering as part of the Nuclear Energy System, Simulation and Safety (NE3S) research group. In our paper we developed datasets for image classification and epistemic testing of LLMs. The benchmark also includes schemas and loaders to help automate the benchmarking process (API call handling, packaging of prompts & dataset elements, etc..) Various models were tested using the benchmark using deterministic vs. stochastic settings and the results can be found in the full paper linked below!

I presented the NucBench Benchmark as part of the Poster Sessions for PHYSOR’26, my first published paper!

Special shoutout to Dr. Muhammad Imron, together we were the only 2 representing the UAE at the conference, it was honor to meet the developer of KOMODO which our students at UoS at myself use often for reactor simulation (often paired with COMSOL). Incredibly impressive work given it was written before the “vibe coding” era we find ourselves in, and his current research with Khalifa University looking into approximating compression MC tally data while still retaining accuracy to reduce the memory requirement for running such codes was incredible to learn about.

Dr. Muhammed Imron (right) and myself (left) in front of his research with Khalifa University presented at the PHYSOR’26 Poster Session!

I’d like to acknowledge my predecessor Polina Matesha for her work on NucBench that I am currently expanding on, and I want to extend my gratitude to my research supervisor Dr. Bassam Khuwaileh for granting me the wonderful opportunity to present this work, and to fulfill my dream of joining the international community advancing reactor physics, contributing to a future of clean energy & nuclear non-proliferation. Thank you to the organizers of the event, everything down to the registration process and the catering was spectacular, and the kindness of the people at the event and the residents of Turino itself was unmatched.

Best,
Dina.

For mortal humans, time is the most finite resource. Hence, I consider it a form of respect to fairly exchange your time in reading this with my time in developing my writing. No ML/AI/generative/automation tool whatsoever is used in any piece I publish. I type it out letter by letter, drafting and editing as I go along, hoping to craft a reading experience worthy of your most finite resource.
