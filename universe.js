/* ═══════════════════════════════════════════════════════════════════
   CINEMATIC 3D UNIVERSE & DARKEST DUNGEON XENOMORPH SENTINEL
   - High-Performance Starfield with Vertical Parallax (Scroll Driven)
   - Falling Meteors with Burning Ionization Trails
   - Stealth Shadow Phase: Creature NEVER slides across content!
     Phases border-to-border with a sleek, silent shadow cloak transition!
   - Ultra-Fast & Smooth Vertical Tracking along Active Border (Left / Right)
   - Dynamic Inward Facing & Accurate Cranial Jaw Laser Targeting
   - Hypersonic Rocket Flight Escape & Sneak Return
   - Interactive Click Transformation: Menacing Xenomorph ➔ Cute Loving Chibi!
   - 100% Non-Intrusive Background (z-index: 2, strictly behind content)
   ═══════════════════════════════════════════════════════════════════ */
(function () {
    'use strict';

    function initWhenReady() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', bootstrap);
        } else {
            bootstrap();
        }
    }

    function bootstrap() {
        if (window.__SP_GATEKEEPER_LOCKED || document.getElementById('sp-terminal-root')) {
            return;
        }
        initCosmicUniverse();
        initTechScorpion();
    }

    /* ─── UTILITIES ─── */
    function rnd(min, max) { return min + Math.random() * (max - min); }
    function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

    function getCssVar(name) {
        return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }

    function hslWithAlpha(hslStr, alpha) {
        if (!hslStr) return 'rgba(139, 92, 246, ' + alpha + ')';
        if (hslStr.startsWith('hsl(')) {
            return hslStr.replace('hsl(', 'hsla(').replace(')', ',' + alpha + ')');
        }
        return hslStr;
    }

    /* ═══════════════════════════════════════════════════════════════
       1. COSMIC UNIVERSE BACKGROUND (Deep space, Smooth Parallax)
       ═══════════════════════════════════════════════════════════════ */
    function initCosmicUniverse() {
        var canvas = document.getElementById('universeBgCanvas');
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.id = 'universeBgCanvas';
            canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2;';
            document.body.prepend(canvas);
        } else {
            canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2;';
        }

        var oldFg = document.getElementById('universeFgCanvas');
        if (oldFg && oldFg.parentNode) oldFg.parentNode.removeChild(oldFg);

        var ctx = canvas.getContext('2d');
        var DPR = window.devicePixelRatio || 1;
        var W = window.innerWidth;
        var H = window.innerHeight;

        function resize() {
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = W * DPR;
            canvas.height = H * DPR;
            canvas.style.width = W + 'px';
            canvas.style.height = H + 'px';
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        }
        resize();
        window.addEventListener('resize', resize);

        /* ── SMOOTH PARALLAX SCROLL TRACKING ── */
        var currentScrollY = window.scrollY || 0;
        var targetScrollY = currentScrollY;

        window.addEventListener('scroll', function () {
            targetScrollY = window.scrollY || 0;
        }, { passive: true });

        /* ── DENSE MULTI-PLANE STARFIELD ── */
        var stars = [];
        var numStars = 460;
        for (var i = 0; i < numStars; i++) {
            var layer = Math.random();
            var depth, r, pFactor, baseAlpha;

            if (layer < 0.6) {
                depth = 0.2;
                r = rnd(0.4, 0.9);
                pFactor = 0.08;
                baseAlpha = rnd(0.15, 0.48);
            } else if (layer < 0.88) {
                depth = 0.55;
                r = rnd(0.9, 1.45);
                pFactor = 0.22;
                baseAlpha = rnd(0.38, 0.78);
            } else {
                depth = 1.0;
                r = rnd(1.45, 2.2);
                pFactor = 0.45;
                baseAlpha = rnd(0.65, 0.98);
            }

            stars.push({
                x: Math.random() * W,
                y: Math.random() * H,
                radius: r,
                depth: depth,
                parallaxFactor: pFactor,
                baseAlpha: baseAlpha,
                twinkleSpeed: rnd(0.015, 0.045),
                twinklePhase: rnd(0, Math.PI * 2),
                colorType: Math.random() < 0.15 ? 'cyan' : (Math.random() < 0.1 ? 'gold' : 'white')
            });
        }

        /* ── FALLING METEORS ── */
        var meteors = [];
        function maybeSpawnMeteor() {
            if (Math.random() < 0.012 && meteors.length < 3) {
                meteors.push({
                    x: rnd(W * 0.1, W * 0.9),
                    y: rnd(-40, H * 0.3),
                    len: rnd(100, 220),
                    speed: rnd(14, 24),
                    angle: rnd(0.55, 0.85),
                    alpha: 1,
                    decay: rnd(0.012, 0.025),
                    radius: rnd(1.5, 3.2)
                });
            }
        }

        /* ── ANIMATION LOOP ── */
        var clock = 0;

        function tick() {
            clock += 0.016;

            var scrollDelta = targetScrollY - currentScrollY;
            currentScrollY += scrollDelta * 0.08;

            ctx.clearRect(0, 0, W, H);

            var cTeal = getCssVar('--accent-teal') || 'hsl(175, 80%, 50%)';
            var cGold = getCssVar('--accent-gold') || 'hsl(45, 95%, 55%)';

            // Hardware-accelerated star rendering
            for (var s = 0; s < stars.length; s++) {
                var st = stars[s];
                var drawY = (st.y - currentScrollY * st.parallaxFactor) % H;
                if (drawY < 0) drawY += H;

                var tw = Math.sin(clock * 60 * st.twinkleSpeed + st.twinklePhase);
                var alpha = clamp(st.baseAlpha + tw * 0.28, 0.08, 0.98);

                ctx.globalAlpha = alpha;
                if (st.colorType === 'cyan') {
                    ctx.fillStyle = cTeal;
                } else if (st.colorType === 'gold') {
                    ctx.fillStyle = cGold;
                } else {
                    ctx.fillStyle = '#ffffff';
                }

                ctx.beginPath();
                ctx.arc(st.x, drawY, st.radius, 0, Math.PI * 2);
                ctx.fill();

                if (st.radius > 1.6 && alpha > 0.65) {
                    ctx.strokeStyle = '#ffffff';
                    ctx.globalAlpha = alpha * 0.35;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(st.x - st.radius * 3.2, drawY);
                    ctx.lineTo(st.x + st.radius * 3.2, drawY);
                    ctx.moveTo(st.x, drawY - st.radius * 3.2);
                    ctx.lineTo(st.x, drawY + st.radius * 3.2);
                    ctx.stroke();
                }
            }
            ctx.globalAlpha = 1;

            // Falling meteors
            maybeSpawnMeteor();
            for (var m = meteors.length - 1; m >= 0; m--) {
                var met = meteors[m];
                met.x += Math.cos(met.angle) * met.speed;
                met.y += Math.sin(met.angle) * met.speed;
                met.alpha -= met.decay;

                if (met.alpha <= 0 || met.x > W + 50 || met.y > H + 50) {
                    meteors.splice(m, 1);
                    continue;
                }

                var tailX = met.x - Math.cos(met.angle) * met.len;
                var tailY = met.y - Math.sin(met.angle) * met.len;

                var mGrad = ctx.createLinearGradient(tailX, tailY, met.x, met.y);
                mGrad.addColorStop(0, 'rgba(255,255,255,0)');
                mGrad.addColorStop(0.7, hslWithAlpha(cGold, met.alpha * 0.6));
                mGrad.addColorStop(1, 'rgba(255,255,255,' + met.alpha + ')');

                ctx.strokeStyle = mGrad;
                ctx.lineWidth = met.radius;
                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(met.x, met.y);
                ctx.stroke();

                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(met.x, met.y, met.radius * 0.8, 0, Math.PI * 2);
                ctx.fill();
            }

            requestAnimationFrame(tick);
        }

        tick();
    }

    /* ═══════════════════════════════════════════════════════════════
       2. LIGHTNING TELEPORT XENOMORPH SENTINEL (Never slides on screen!)
       ═══════════════════════════════════════════════════════════════ */
    function initTechScorpion() {
        var canvas = document.getElementById('alienLizardCanvas');
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.id = 'alienLizardCanvas';
            canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1200;';
            document.body.appendChild(canvas);
        }

        var ctx = canvas.getContext('2d');
        var DPR = window.devicePixelRatio || 1;
        var W = window.innerWidth;
        var H = window.innerHeight;

        /* ── BEHANCE DARKEST DUNGEON XENOMORPH SPRITESHEETS ── */
        var sheetIdle = new Image();
        sheetIdle.src = 'assets/alien/alien_idle.png';
        var sheetAttack = new Image();
        sheetAttack.src = 'assets/alien/alien_attack.png';
        var sheetStrike = new Image();
        sheetStrike.src = 'assets/alien/alien_strike.png';

        function resize() {
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = W * DPR;
            canvas.height = H * DPR;
            canvas.style.width = W + 'px';
            canvas.style.height = H + 'px';
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        }
        resize();
        window.addEventListener('resize', resize);

        function getEdgeMargin() { return W > 768 ? 68 : 46; }

        /* ── MOUSE & BORDER STATE ── */
        var mouseX = W * 0.5;
        var mouseY = H * 0.5;
        var lastMouseX = mouseX;
        var lastMouseY = mouseY;
        var lastMoveTime = Date.now();
        var hasUserMovedMouse = false;

        var currentBorder = 'right'; // 'left' or 'right'
        var scorpionX = W - getEdgeMargin();
        var scorpionY = H * 0.5;
        var targetScorpionY = H * 0.5;
        var isMouseHoveringCreature = false;
        var currentFacing = -1; // -1: looking left (on right border), 1: looking right (on left border)
        var smoothTilt = 0;

        /* ── STEALTH SHADOW PHASE SHIFT (Sleek edge transition, NO childish lightning) ── */
        var phaseTimer = 0;
        var phaseMax = 12; // ~0.2s smooth cloak re-materialize
        var departureShadows = [];

        function triggerTeleport(newBorder) {
            currentBorder = newBorder;
            var margin = getEdgeMargin();
            var newX = (newBorder === 'left') ? margin : W - margin;

            // Record subtle departure silhouette that dissolves instantly
            departureShadows.push({
                x: scorpionX,
                y: scorpionY,
                facing: currentFacing,
                alpha: 0.55,
                frame: (Math.floor(clock * 38) % 25)
            });

            // Instant warp: Position snaps to the destination border so it NEVER slides across screen!
            scorpionX = newX;
            targetScorpionY = clamp(mouseY, 70, H - 70);
            scorpionY = targetScorpionY;

            phaseTimer = phaseMax;
        }

        window.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            hasUserMovedMouse = true;

            // Teleport when cursor crosses to the other half of the screen
            var desiredBorder = (mouseX < W * 0.5) ? 'left' : 'right';
            if (desiredBorder !== currentBorder) {
                triggerTeleport(desiredBorder);
            }

            // Target Y follows mouse Y clamped to screen
            targetScorpionY = clamp(mouseY, 70, H - 70);

            var distMoved = Math.hypot(mouseX - lastMouseX, mouseY - lastMouseY);
            if (distMoved > 4) {
                lastMoveTime = Date.now();
                lastMouseX = mouseX;
                lastMouseY = mouseY;

                // User movement breaks attack lock
                if (state === STATE_CHARGE || state === STATE_LOCK) {
                    state = STATE_IDLE;
                    chargeProgress = 0;
                }
            }

            var distToCreature = Math.hypot(mouseX - scorpionX, mouseY - scorpionY);
            isMouseHoveringCreature = distToCreature < 55;
        });

        /* ── CLICK TO TRANSFORM EASTER EGG ── */
        var isTransformedCute = false;
        var heartParticles = [];
        var transformBurstParticles = [];

        window.addEventListener('click', function (e) {
            var dist = Math.hypot(e.clientX - scorpionX, e.clientY - scorpionY);
            if (dist < 60) {
                isTransformedCute = !isTransformedCute;

                for (var p = 0; p < 24; p++) {
                    var ang = rnd(0, Math.PI * 2);
                    var spd = rnd(2, 7);
                    transformBurstParticles.push({
                        x: scorpionX,
                        y: scorpionY,
                        vx: Math.cos(ang) * spd,
                        vy: Math.sin(ang) * spd,
                        size: rnd(3, 8),
                        alpha: 1,
                        color: isTransformedCute ? '#ff4081' : '#00e5ff'
                    });
                }
            }
        });

        /* ── STATE MACHINE ── */
        var STATE_IDLE   = 0;
        var STATE_CHARGE = 1;
        var STATE_LOCK   = 2;
        var STATE_ESCAPE = 3;
        var STATE_ABSENT = 4;
        var STATE_RETURN = 5;

        var state = STATE_IDLE;
        var stateStartTime = Date.now();
        var chargeProgress = 0;
        var escapePos = { x: 0, y: 0 };
        var escapeVelocity = { x: 0, y: 0 };
        var escapeParticles = [];

        var clock = 0;

        function tickScorpion() {
            clock += 0.016;
            ctx.clearRect(0, 0, W, H);

            var now = Date.now();
            var stillDuration = now - lastMoveTime;

            var cPink = getCssVar('--accent-pink') || 'hsl(330, 85%, 60%)';
            var cTeal = getCssVar('--accent-teal') || 'hsl(175, 80%, 50%)';

            // ── FAST, HIGHLY RESPONSIVE VERTICAL LERP ──
            var lerpSpeedY = 0.28; // Buttery-smooth and fast
            scorpionY += (targetScorpionY - scorpionY) * lerpSpeedY;

            // X strictly locked to current border edge (NEVER slides across screen!)
            var edgeMargin = getEdgeMargin();
            var borderLockedX = (currentBorder === 'left') ? edgeMargin : (W - edgeMargin);
            scorpionX = borderLockedX;

            // Facing direction: always face toward screen center/cursor!
            currentFacing = (currentBorder === 'left') ? 1 : -1;

            // ──────────────── STATE TRANSITIONS ────────────────
            if (!isTransformedCute) {
                if (state === STATE_IDLE) {
                    if (hasUserMovedMouse && stillDuration >= 3200) {
                        state = STATE_CHARGE;
                        stateStartTime = now;
                        chargeProgress = 0;
                    }
                } else if (state === STATE_CHARGE) {
                    chargeProgress = Math.min(1, (now - stateStartTime) / 1400);
                    if (chargeProgress >= 1) {
                        state = STATE_LOCK;
                        stateStartTime = now;
                    }
                } else if (state === STATE_LOCK) {
                    var lockDuration = now - stateStartTime;
                    if (lockDuration >= 1800) {
                        // Launch hypersonic flight escape off closest edge
                        state = STATE_ESCAPE;
                        stateStartTime = now;
                        escapePos = { x: scorpionX, y: scorpionY };
                        var escapeDir = (currentBorder === 'left') ? -1 : 1;
                        escapeVelocity = { x: escapeDir * 18, y: -20 };
                    }
                } else if (state === STATE_ESCAPE) {
                    var dirSign = (escapeVelocity.x >= 0) ? 1 : -1;
                    escapeVelocity.x += dirSign * 1.4;
                    escapeVelocity.y -= 1.6;
                    escapePos.x += escapeVelocity.x;
                    escapePos.y += escapeVelocity.y;

                    for (var ep = 0; ep < 3; ep++) {
                        escapeParticles.push({
                            x: escapePos.x + rnd(-6, 6),
                            y: escapePos.y + rnd(8, 20),
                            vx: rnd(-2, 2) - escapeVelocity.x * 0.15,
                            vy: rnd(2, 6) - escapeVelocity.y * 0.15,
                            size: rnd(4, 10),
                            alpha: 1,
                            color: Math.random() < 0.5 ? cPink : cTeal
                        });
                    }

                    if (escapePos.x > W + 220 || escapePos.x < -220 || escapePos.y < -220) {
                        state = STATE_ABSENT;
                        stateStartTime = now;
                    }
                } else if (state === STATE_ABSENT) {
                    if (now - stateStartTime >= 4500) {
                        state = STATE_RETURN;
                        stateStartTime = now;
                    }
                } else if (state === STATE_RETURN) {
                    var retProg = (now - stateStartTime) / 1000;
                    if (retProg >= 1) {
                        state = STATE_IDLE;
                        lastMoveTime = now;
                    }
                }
            } else {
                state = STATE_IDLE;
                chargeProgress = 0;

                if (Math.random() < 0.08) {
                    heartParticles.push({
                        x: scorpionX + rnd(-20, 20),
                        y: scorpionY + rnd(-10, 10),
                        vy: rnd(-1.2, -2.4),
                        vx: rnd(-0.5, 0.5),
                        size: rnd(8, 16),
                        alpha: 1
                    });
                }
            }

            // ──────────────── DRAW DEPARTURE SHADOW DISSOLVE ────────────────
            for (var si = departureShadows.length - 1; si >= 0; si--) {
                var ds = departureShadows[si];
                ds.alpha -= 0.08;
                if (ds.alpha <= 0) {
                    departureShadows.splice(si, 1);
                    continue;
                }
                if (sheetIdle && sheetIdle.complete && sheetIdle.naturalWidth > 0) {
                    ctx.save();
                    ctx.translate(ds.x, ds.y);
                    ctx.scale(ds.facing === 1 ? -1 : 1, 1);
                    ctx.globalAlpha = ds.alpha * 0.45;
                    ctx.drawImage(
                        sheetIdle,
                        ds.frame * 280, 0, 280, 200,
                        -146 * 0.5 - 6, -104 * 0.5,
                        146, 104
                    );
                    ctx.restore();
                }
            }

            if (phaseTimer > 0) {
                phaseTimer--;
            }

            // ──────────────── DRAW PARTICLES ────────────────
            for (var bp = transformBurstParticles.length - 1; bp >= 0; bp--) {
                var b = transformBurstParticles[bp];
                b.x += b.vx;
                b.y += b.vy;
                b.alpha -= 0.035;
                if (b.alpha <= 0) {
                    transformBurstParticles.splice(bp, 1);
                    continue;
                }
                ctx.fillStyle = hslWithAlpha(b.color, b.alpha);
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
                ctx.fill();
            }

            for (var rp = escapeParticles.length - 1; rp >= 0; rp--) {
                var p = escapeParticles[rp];
                p.x += p.vx;
                p.y += p.vy;
                p.size *= 0.94;
                p.alpha -= 0.035;
                if (p.alpha <= 0 || p.size < 1) {
                    escapeParticles.splice(rp, 1);
                    continue;
                }
                ctx.fillStyle = hslWithAlpha(p.color, p.alpha);
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }

            for (var hp = heartParticles.length - 1; hp >= 0; hp--) {
                var h = heartParticles[hp];
                h.x += h.vx;
                h.y += h.vy;
                h.alpha -= 0.02;
                if (h.alpha <= 0) {
                    heartParticles.splice(hp, 1);
                    continue;
                }
                ctx.save();
                ctx.translate(h.x, h.y);
                ctx.fillStyle = 'rgba(255, 64, 129, ' + h.alpha + ')';
                var hs = h.size * 0.5;
                ctx.beginPath();
                ctx.moveTo(0, hs * 0.3);
                ctx.bezierCurveTo(-hs, -hs * 0.8, -hs * 1.5, hs * 0.4, 0, hs * 1.5);
                ctx.bezierCurveTo(hs * 1.5, hs * 0.4, hs, -hs * 0.8, 0, hs * 0.3);
                ctx.fill();
                ctx.restore();
            }

            if (state === STATE_ABSENT) {
                requestAnimationFrame(tickScorpion);
                return;
            }

            // ──────────────── COMPUTE DRAW COORDINATES ────────────────
            var drawX = scorpionX;
            var drawY = scorpionY;

            if (state === STATE_ESCAPE) {
                drawX = escapePos.x;
                drawY = escapePos.y;
            } else if (state === STATE_RETURN) {
                var retP = clamp((now - stateStartTime) / 1000, 0, 1);
                var ease = 1 - Math.pow(1 - retP, 3);
                var retOffsetSign = (currentBorder === 'left') ? -1 : 1;
                drawX = scorpionX + (1 - ease) * 140 * retOffsetSign;
            }

            var dx = mouseX - drawX;
            var dy = mouseY - drawY;

            // ──────────────── 1. TAIL / JAW LASER & TARGETING HUD ────────────────
            if (!isTransformedCute && (state === STATE_CHARGE || state === STATE_LOCK)) {
                var laserOffset = currentFacing === 1 ? 44 : -44;
                var stingerX = drawX + laserOffset;
                var stingerY = drawY - 16;

                var lAlpha = state === STATE_CHARGE ? chargeProgress * 0.8 : 0.98;
                var bWidth = state === STATE_CHARGE ? (0.8 + chargeProgress * 0.8) : (1.5 + Math.sin(clock * 32) * 0.4);

                ctx.save();
                ctx.shadowColor = '#ff0055';
                ctx.shadowBlur = state === STATE_LOCK ? 18 : 8;

                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = bWidth * 0.5;
                ctx.beginPath();
                ctx.moveTo(stingerX, stingerY);
                ctx.lineTo(mouseX, mouseY);
                ctx.stroke();

                ctx.strokeStyle = hslWithAlpha(cPink, lAlpha);
                ctx.lineWidth = bWidth;
                ctx.beginPath();
                ctx.moveTo(stingerX, stingerY);
                ctx.lineTo(mouseX, mouseY);
                ctx.stroke();

                ctx.restore();

                // Tactical Reticle at Cursor
                ctx.save();
                ctx.translate(mouseX, mouseY);
                var retRot = clock * (state === STATE_LOCK ? 8 : 2.5);
                var retR = state === STATE_LOCK ? (18 + Math.sin(clock * 20) * 3) : (32 - chargeProgress * 14);

                ctx.strokeStyle = hslWithAlpha(cPink, lAlpha);
                ctx.lineWidth = 1.6;
                ctx.beginPath();
                ctx.arc(0, 0, retR, retRot, retRot + Math.PI * 0.4);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(0, 0, retR, retRot + Math.PI, retRot + Math.PI * 1.4);
                ctx.stroke();

                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(-retR * 0.45, 0); ctx.lineTo(retR * 0.45, 0);
                ctx.moveTo(0, -retR * 0.45); ctx.lineTo(0, retR * 0.45);
                ctx.stroke();

                ctx.fillStyle = '#ff0055';
                ctx.beginPath();
                ctx.arc(0, 0, state === STATE_LOCK ? 4 : 2.5, 0, Math.PI * 2);
                ctx.fill();

                if (state === STATE_LOCK) {
                    ctx.font = '8px "Fira Code", monospace';
                    ctx.fillStyle = '#ffffff';
                    ctx.textAlign = 'center';
                    ctx.fillText('TARGET LOCKED // 99.8%', 0, -retR - 8);

                    for (var spk = 0; spk < 4; spk++) {
                        var sa = rnd(0, Math.PI * 2);
                        var sd = rnd(4, 16);
                        ctx.strokeStyle = cPink;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(0, 0);
                        ctx.lineTo(Math.cos(sa) * sd, Math.sin(sa) * sd);
                        ctx.stroke();
                    }
                } else {
                    ctx.font = '7px "Fira Code", monospace';
                    ctx.fillStyle = hslWithAlpha(cTeal, chargeProgress);
                    ctx.textAlign = 'center';
                    ctx.fillText('LOCKING... ' + Math.floor(chargeProgress * 100) + '%', 0, -retR - 6);
                }
                ctx.restore();
            }

            // ──────────────── 2. RENDER THE CREATURE ────────────────
            ctx.save();
            ctx.translate(drawX, drawY);

            // Subtle stealth cloak materialization
            if (phaseTimer > 0) {
                ctx.globalAlpha = Math.max(0.35, 1 - (phaseTimer / phaseMax) * 0.65);
            }

            // Hover indicator halo
            if (isMouseHoveringCreature) {
                ctx.strokeStyle = isTransformedCute ? 'rgba(255, 64, 129, 0.45)' : hslWithAlpha(cTeal, 0.45);
                ctx.lineWidth = 1;
                ctx.setLineDash([4, 4]);
                ctx.beginPath();
                ctx.arc(0, 0, 48, 0, Math.PI * 2);
                ctx.stroke();
                ctx.setLineDash([]);
            }

            if (!isTransformedCute) {
                // ═══════════════════════════════════════════════════
                // A. THE DARKEST DUNGEON XENOMORPH ALIEN (BEHANCE)
                // ═══════════════════════════════════════════════════

                var activeSheet = sheetIdle;
                var totalFrames = 25;
                var animSpeed = 38; // Increased from 22 for fast, smooth stalking crawl

                if (state === STATE_ESCAPE) {
                    activeSheet = sheetStrike;
                    totalFrames = 30;
                    animSpeed = 52; // Increased from 28 for ultra-fast snap
                } else if (state === STATE_CHARGE || state === STATE_LOCK) {
                    activeSheet = sheetAttack;
                    totalFrames = 25;
                    animSpeed = 44; // Increased from 26 for sharp, aggressive attack readiness
                }

                var frameIdx = Math.floor(clock * animSpeed) % totalFrames;
                var alienDrawW = 146;
                var alienDrawH = 104;

                // Flip X when facing right (sprite natively faces left)
                ctx.scale(currentFacing === 1 ? -1 : 1, 1);

                // Smooth predatory tilt tracking mouse Y
                var targetTilt = clamp((dy / Math.max(30, Math.abs(dx))) * 0.18, -0.2, 0.2);
                if (currentFacing === 1) targetTilt = -targetTilt;
                smoothTilt += (targetTilt - smoothTilt) * 0.24;
                ctx.rotate(smoothTilt);

                // Bioluminescent skull & stinger aura
                if (state === STATE_LOCK || state === STATE_CHARGE) {
                    ctx.shadowColor = '#ff0033';
                    ctx.shadowBlur = state === STATE_LOCK ? 24 : 12;
                } else {
                    ctx.shadowColor = cTeal;
                    ctx.shadowBlur = 10;
                }

                if (activeSheet && activeSheet.complete && activeSheet.naturalWidth > 0) {
                    ctx.drawImage(
                        activeSheet,
                        frameIdx * 280, 0, 280, 200,
                        -alienDrawW * 0.5 - 6, -alienDrawH * 0.5,
                        alienDrawW, alienDrawH
                    );
                }
                ctx.shadowBlur = 0;

            } else {
                // ═══════════════════════════════════════════════════
                // B. CUTE LOVING CHIBI CREATURE (After Click Transform!)
                // ═══════════════════════════════════════════════════

                var cuteBreathe = Math.sin(clock * 5) * 1.5;

                var cGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, 26);
                cGrad.addColorStop(0, '#ffffff');
                cGrad.addColorStop(0.7, '#ffcce5');
                cGrad.addColorStop(1, '#ff99cc');

                ctx.fillStyle = cGrad;
                ctx.strokeStyle = '#ff66aa';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.ellipse(0, 0, 22 + cuteBreathe * 0.5, 20 + cuteBreathe * 0.4, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                var earWiggle = Math.sin(clock * 7) * 0.15;
                [-1, 1].forEach(function (side) {
                    ctx.save();
                    ctx.translate(side * 10, -18);
                    ctx.rotate(side * (0.35 + earWiggle));
                    ctx.fillStyle = '#ffb3d9';
                    ctx.strokeStyle = '#ff66aa';
                    ctx.lineWidth = 1.2;
                    ctx.beginPath();
                    ctx.ellipse(0, -10, 6, 12, 0, 0, Math.PI * 2);
                    ctx.fill(); ctx.stroke();

                    ctx.fillStyle = '#ff4081';
                    ctx.beginPath();
                    ctx.ellipse(0, -9, 3.5, 7, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                });

                ctx.fillStyle = 'rgba(255, 64, 129, 0.55)';
                ctx.beginPath();
                ctx.ellipse(-14, 4, 4.5, 2.5, 0, 0, Math.PI * 2);
                ctx.ellipse(14, 4, 4.5, 2.5, 0, 0, Math.PI * 2);
                ctx.fill();

                var cutePupilX = clamp(dx * 0.015, -2, 2);
                var cutePupilY = clamp(dy * 0.015, -2, 2);

                [-7, 7].forEach(function (ex) {
                    ctx.fillStyle = '#220818';
                    ctx.beginPath();
                    ctx.ellipse(ex, -2, 5.5, 7, 0, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.fillStyle = '#9c27b0';
                    ctx.beginPath();
                    ctx.ellipse(ex + cutePupilX * 0.3, -2 + cutePupilY * 0.3, 3.8, 4.8, 0, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.fillStyle = '#ffffff';
                    ctx.beginPath();
                    ctx.arc(ex + cutePupilX - 1.5, -4 + cutePupilY, 1.8, 0, Math.PI * 2);
                    ctx.arc(ex + cutePupilX + 1.2, 0 + cutePupilY, 1.0, 0, Math.PI * 2);
                    ctx.fill();
                });

                ctx.strokeStyle = '#880033';
                ctx.lineWidth = 1.4;
                ctx.beginPath();
                ctx.arc(-2.5, 5, 2.5, 0, Math.PI);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(2.5, 5, 2.5, 0, Math.PI);
                ctx.stroke();

                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(-6, 12, 3.5, 0, Math.PI * 2);
                ctx.arc(6, 12, 3.5, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#ff1744';
                ctx.shadowColor = '#ff4081';
                ctx.shadowBlur = 8;
                ctx.beginPath();
                ctx.moveTo(0, 10);
                ctx.bezierCurveTo(-4, 7, -6, 12, 0, 16);
                ctx.bezierCurveTo(6, 12, 4, 7, 0, 10);
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            ctx.restore();

            requestAnimationFrame(tickScorpion);
        }

        tickScorpion();
    }

    initWhenReady();
})();
