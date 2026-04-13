// --- Floating Tech Icons for Portfolio ---
document.addEventListener('DOMContentLoaded', () => {
    const techs = [
    { name: 'C#', icon: '<svg class="icon" viewBox="0 0 32 32" fill="#9B4F96" width="1em" height="1em"><circle cx="16" cy="16" r="16" fill="#fff"/><text x="50%" y="55%" text-anchor="middle" fill="#9B4F96" font-size="16" font-family="Arial" dy=".3em">C#</text></svg>' },
    { name: '.NET', icon: '<svg class="icon" viewBox="0 0 32 32" fill="#512BD4" width="1em" height="1em"><circle cx="16" cy="16" r="16" fill="#fff"/><text x="50%" y="55%" text-anchor="middle" fill="#512BD4" font-size="13" font-family="Arial" dy=".3em">.NET</text></svg>' },
    { name: 'SQL', icon: '<svg class="icon" viewBox="0 0 32 32" fill="#00758F" width="1em" height="1em"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#fff"/><text x="50%" y="55%" text-anchor="middle" fill="#00758F" font-size="14" font-family="Arial" dy=".3em">SQL</text></svg>' },
    { name: 'PostgreSQL', icon: '<svg class="icon" viewBox="0 0 32 32" fill="#336791" width="1em" height="1em"><circle cx="16" cy="16" r="16" fill="#fff"/><text x="50%" y="55%" text-anchor="middle" fill="#336791" font-size="10" font-family="Arial" dy=".3em">PGSQL</text></svg>' },
    { name: 'Java', icon: '<svg class="icon" viewBox="0 0 32 32" fill="#E76F00" width="1em" height="1em"><circle cx="16" cy="16" r="16" fill="#fff"/><text x="50%" y="55%" text-anchor="middle" fill="#E76F00" font-size="13" font-family="Arial" dy=".3em">Java</text></svg>' },
    { name: 'React', icon: '<svg class="icon" viewBox="0 0 32 32" fill="#61DAFB" width="1em" height="1em"><circle cx="16" cy="16" r="16" fill="#fff"/><text x="50%" y="55%" text-anchor="middle" fill="#61DAFB" font-size="13" font-family="Arial" dy=".3em">React</text></svg>' },
    { name: 'HTML', icon: '<svg class="icon" viewBox="0 0 32 32" fill="#E44D26" width="1em" height="1em"><circle cx="16" cy="16" r="16" fill="#fff"/><text x="50%" y="55%" text-anchor="middle" fill="#E44D26" font-size="13" font-family="Arial" dy=".3em">HTML</text></svg>' },
    { name: 'CSS', icon: '<svg class="icon" viewBox="0 0 32 32" fill="#1572B6" width="1em" height="1em"><circle cx="16" cy="16" r="16" fill="#fff"/><text x="50%" y="55%" text-anchor="middle" fill="#1572B6" font-size="13" font-family="Arial" dy=".3em">CSS</text></svg>' },
    { name: 'Docker', icon: '<svg class="icon" viewBox="0 0 32 32" fill="#2496ED" width="1em" height="1em"><circle cx="16" cy="16" r="16" fill="#fff"/><text x="50%" y="55%" text-anchor="middle" fill="#2496ED" font-size="11" font-family="Arial" dy=".3em">Docker</text></svg>' },
        { name: 'Git', icon: '<svg class="icon" viewBox="0 0 32 32" fill="#F05032" width="1em" height="1em"><circle cx="16" cy="16" r="16" fill="#fff"/><text x="50%" y="55%" text-anchor="middle" fill="#F05032" font-size="13" font-family="Arial" dy=".3em">Git</text></svg>' }
    ];
    const techIconsDiv = document.getElementById('tech-icons');
    if (techIconsDiv) {
        techIconsDiv.innerHTML = techs.map(t => t.icon).join('');
    }
});

const SudoType = (() => {
    // State
    const TYPR_STORAGE_KEY = 'SudoType_Snippets';
    let snippets = [];
    let currentSession = {
        code: '',
        title: '',
        timer: null,
        startTime: null,
        errorsFound: 0,
        isFinished: false
    };

    // DOM Elements - Dashboard
    const dashboardView = document.getElementById('dashboardView');
    const snippetTitleInp = document.getElementById('snippetTitle');
    const snippetCodeInp = document.getElementById('snippetCode');
    const saveSnippetBtn = document.getElementById('saveSnippetBtn');
    const snippetsGrid = document.getElementById('snippetsGrid');

    // DOM Elements - Arena
    const arenaView = document.getElementById('arenaView');
    const arenaTitle = document.getElementById('arenaTitle');
    const timeStat = document.getElementById('timeStat');
    const wpmStat = document.getElementById('wpmStat');
    const accStat = document.getElementById('accStat');
    const errStat = document.getElementById('errStat');
    const codeDisplay = document.getElementById('codeDisplay');
    const typingInput = document.getElementById('typingInput');
    const backToDbBtn = document.getElementById('backToDbBtn');
    const restartBtn = document.getElementById('restartBtn');

    // DOM Elements - Modal
    const resultsModal = document.getElementById('resultsModal');
    const rankDisplay = document.getElementById('rankDisplay');
    const resultWpm = document.getElementById('resultWpm');
    const resultAcc = document.getElementById('resultAcc');
    const resultTime = document.getElementById('resultTime');
    const resultErr = document.getElementById('resultErr');
    const modalRestartBtn = document.getElementById('modalRestartBtn');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    // Init
    const init = () => {
        loadSnippets();
        bindEvents();
        renderSnippets();
    };

    // Storage
    const loadSnippets = () => {
        const stored = localStorage.getItem(TYPR_STORAGE_KEY);
        if (stored) {
            try {
                snippets = JSON.parse(stored);
            } catch (e) {
                snippets = [];
            }
        }
        // Default snippet if empty
        if (snippets.length === 0) {
            snippets.push({
                id: Date.now().toString(),
                title: 'Hello World (JS)',
                code: 'function greet(name) {\n  console.log("Hello, " + name + "!");\n}\n\ngreet("World");',
                bestWpm: 0,
                bestAcc: 0
            });
            saveSnippets();
        }
    };

    const saveSnippets = () => {
        localStorage.setItem(TYPR_STORAGE_KEY, JSON.stringify(snippets));
    };

    // Events
    const bindEvents = () => {
        saveSnippetBtn.addEventListener('click', handleAddSnippet);
        backToDbBtn.addEventListener('click', navigateToDashboard);
        restartBtn.addEventListener('click', restartSession);
        modalCloseBtn.addEventListener('click', navigateToDashboard);
        modalRestartBtn.addEventListener('click', () => {
            resultsModal.classList.remove('active');
            restartSession();
        });

        typingInput.addEventListener('input', handleTyping);
        // Better Tab support and Enter support if needed, but native textarea handles Enter as \n.
        typingInput.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                processInsertion('  '); // 2 spaces
            }
        });

        // Keep focus on hidden textarea when clicking code container
        codeDisplay.parentElement.addEventListener('click', () => {
            typingInput.focus();
        });
    };

    const processInsertion = (chars) => {
        if(currentSession.isFinished) return;
        const start = typingInput.selectionStart;
        const end = typingInput.selectionEnd;
        typingInput.value = typingInput.value.substring(0, start) + chars + typingInput.value.substring(end);
        typingInput.selectionStart = typingInput.selectionEnd = start + chars.length;
        handleTyping();
    };

    // Dashboard Logic
    const handleAddSnippet = () => {
        const title = snippetTitleInp.value.trim();
        const code = snippetCodeInp.value.replace(/\r\n?/g, '\n');

        if (!title || !code.trim()) {
            alert('Por favor provee un título y el código.');
            return;
        }

        snippets.unshift({
            id: Date.now().toString(),
            title,
            code,
            bestWpm: 0,
            bestAcc: 0
        });

        saveSnippets();
        renderSnippets();
        snippetTitleInp.value = '';
        snippetCodeInp.value = '';
    };

    const removeSnippet = (id) => {
        snippets = snippets.filter(s => s.id !== id);
        saveSnippets();
        renderSnippets();
    };

    const renderSnippets = () => {
        snippetsGrid.innerHTML = '';
        snippets.forEach(snippet => {
            const el = document.createElement('div');
            el.className = 'snippet-card';
            el.innerHTML = `
                <h3>${escapeHtml(snippet.title)}</h3>
                <p class="stats">Mejor: ${snippet.bestWpm} WPM | ${snippet.bestAcc}% Precisión</p>
                <button class="delete-btn" title="Eliminar Recorte">×</button>
            `;
            
            el.addEventListener('click', (e) => {
                if(e.target.classList.contains('delete-btn')) {
                    e.stopPropagation();
                    if(confirm('¿Eliminar este recorte?')) removeSnippet(snippet.id);
                } else {
                    startSession(snippet);
                }
            });
            snippetsGrid.appendChild(el);
        });
    };

    // Navigation
    const navigateToDashboard = () => {
        resultsModal.classList.remove('active');
        arenaView.classList.remove('active');
        dashboardView.classList.add('active');
        clearTimer();
        renderSnippets();
    };

    // Session Logic
    const startSession = (snippet) => {
        currentSession.snippetId = snippet.id;
        currentSession.code = snippet.code;
        currentSession.title = snippet.title;
        dashboardView.classList.remove('active');
        arenaView.classList.add('active');
        
        arenaTitle.textContent = currentSession.title;
        restartSession();
    };

    const restartSession = () => {
        currentSession.isFinished = false;
        currentSession.startTime = null;
        currentSession.errorsFound = 0;
        clearTimer();
        
        typingInput.value = '';
        typingInput.disabled = false;
        
        updateStatsUI(0, 0, 100, 0);
        renderCode();
        typingInput.focus();
    };

    // Typing Logic
    const handleTyping = () => {
        if (currentSession.isFinished) return;

        const typed = typingInput.value.replace(/\r\n?/g, '\n');
        
        // Start timer on first keystroke
        if (typed.length === 1 && !currentSession.startTime) {
            currentSession.startTime = Date.now();
            currentSession.timer = setInterval(calculateStats, 200);
        }

        // Count errors in current stroke
        let currentErrors = 0;
        // Don't let users type infinitely beyond code length limit to prevent huge layouts (cap at code.length)
        if (typed.length > currentSession.code.length) {
            typingInput.value = typed.substring(0, currentSession.code.length);
        }

        for (let i = 0; i < typed.length; i++) {
            if (typed[i] !== currentSession.code[i]) {
                currentErrors++;
            }
        }
        currentSession.errorsFound = currentErrors;

        // Render everything
        renderCode(typed);
        calculateStats();

        // Check if finished by length
        if (typed.length >= currentSession.code.length) {
            finishSession();
        }
    };

    const renderCode = (typed = '') => {
        let html = '';
        const code = currentSession.code;

        for (let i = 0; i < code.length; i++) {
            let ch = code[i];
            let displayChar = ch === '\n' ? '↵\n' : escapeHtml(ch);
            if (ch === ' ' && i < typed.length && typed[i] !== ' ') {
                // Mistyped space
                displayChar = '_'; 
            }

            let classStr = 'char-box';
            let caretHtml = '';

            // Cursor logic
            if (i === typed.length && !currentSession.isFinished) {
                caretHtml = '<span class="caret"></span>';
            }

            if (i < typed.length) {
                if (typed[i] === ch) {
                    classStr += ' correct';
                } else {
                    classStr += ' incorrect';
                    // Show what was expected but visibly mark as wrong
                }
            }

            html += `<span class="${classStr}">${caretHtml}${displayChar}</span>`;
        }

        // If cursor is at the very end
        if (typed.length === code.length && !currentSession.isFinished) {
            html += `<span class="char-box"><span class="caret"></span></span>`;
        }

        codeDisplay.innerHTML = html;
    };

    const calculateStats = () => {
        const typed = typingInput.value;
        const elapsedSecs = currentSession.startTime ? Math.max((Date.now() - currentSession.startTime) / 1000, 1) : 0;
        
        // Standard WPM: 5 chars = 1 word
        const wpm = elapsedSecs > 0 ? Math.round(((typed.length / 5) / elapsedSecs) * 60) : 0;
        
        let acc = 100;
        if (typed.length > 0) {
            acc = Math.max(0, Math.round(((typed.length - currentSession.errorsFound) / typed.length) * 100));
        }

        updateStatsUI(
            Math.floor(elapsedSecs),
            wpm,
            acc,
            currentSession.errorsFound
        );

        return { time: Math.floor(elapsedSecs), wpm, acc, err: currentSession.errorsFound };
    };

    const updateStatsUI = (t, w, a, e) => {
        timeStat.textContent = t + 's';
        wpmStat.textContent = w;
        accStat.textContent = a + '%';
        errStat.textContent = e;
    };

    const finishSession = () => {
        currentSession.isFinished = true;
        clearTimer();
        typingInput.disabled = true;

        const finalStats = calculateStats();

        // Save best stats
        const snippetIndex = snippets.findIndex(s => s.id === currentSession.snippetId);
        if (snippetIndex !== -1 && finalStats.err === 0) {
            const s = snippets[snippetIndex];
            if (finalStats.wpm > s.bestWpm) s.bestWpm = finalStats.wpm;
            if (finalStats.acc > s.bestAcc) s.bestAcc = finalStats.acc;
            saveSnippets();
        }

        showResults(finalStats);
    };

    const showResults = (stats) => {
        resultWpm.textContent = stats.wpm + ' WPM';
        resultAcc.textContent = stats.acc + '%';
        resultTime.textContent = stats.time + 's';
        resultErr.textContent = stats.err;

        let rank = 'Programador';
        if (stats.wpm > 80 && stats.acc === 100) rank = 'Nivel Dios';
        else if (stats.wpm > 60 && stats.acc > 95) rank = 'Ninja';
        else if (stats.wpm > 40 && stats.acc > 90) rank = 'Senior Dev';
        else if (stats.wpm > 20 && stats.acc > 80) rank = 'Junior Dev';
        else rank = 'Pasante';

        rankDisplay.textContent = rank;
        resultsModal.classList.add('active');
    };

    const clearTimer = () => {
        if (currentSession.timer) {
            clearInterval(currentSession.timer);
            currentSession.timer = null;
        }
    };

    const escapeHtml = (unsafe) => {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    return { init };
})();

document.addEventListener('DOMContentLoaded', SudoType.init);
